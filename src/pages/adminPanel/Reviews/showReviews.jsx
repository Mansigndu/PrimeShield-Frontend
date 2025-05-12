import { useEffect,useState } from "react";
import AdminNav from "../../../component/adminNav/adminNav";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios"
import { MdDeleteForever } from "react-icons/md";
import './showreview.css'
import Swal from "sweetalert2"

function Review(){
  const[row,setRow] = useState([])

  useEffect(() =>{
    async function fetchReview() {
      const response = await axios.get('https://primeshield-backend.onrender.com/reviewsgain')
      console.log(response)
      setRow(response.data)
    
    }
    fetchReview()
  },[])

  async function handleDelete(id) {
      console.log("Attempting to delete payment with ID:", id); // Debugging log
  
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to delete this payment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
        customClass: {
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button'
        }
      });
      if (result.isConfirmed) {
            try {
              const response = await axios.delete(`https://primeshield-backend.onrender.com/deleteReview/${id}`);
              console.log("Delete Response:", response.data);
      
              setRow((prev) => prev.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "The payment has been deleted.", "success");
            } catch (error) {
              console.error("Error deleting payment:", error);
              Swal.fire("Error!", "Failed to delete the payment.", "error");
            }
          }
        }
      


   
  const columns= [
    {field:'name',headerName:'name',width:100},
    {field:'reviewText',headerName:'reviewText',width:500},
  
    {
          field: 'actions',
          headerName: 'Actions',
          width: 180,
          sortable: false,
          renderCell: (params) => (
            <div>
              
              <MdDeleteForever
                onClick={() => handleDelete(params.row._id)}
                fontSize={"2vw"}
                style={{ margin: "20px" }}
              />
              </div>
          )
        }
  
  ]
  
  const paginationModel = { page: 0, pageSize: 5 };

    return(
      <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        getRowId={(row) => row._id}  // Use '_id' as the unique identifier
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
        
    )
}

export default Review