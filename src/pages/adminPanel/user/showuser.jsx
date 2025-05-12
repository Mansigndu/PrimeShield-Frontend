import { useEffect,useState } from "react";
import AdminNav from "../../../component/adminNav/adminNav";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios"
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'

function User() {
  const[row,setRow] = useState([])

  useEffect(()=>{
    async function fetchUser() {
      const response = await axios.get('http://localhost:2025/getUser')
      console.log(response)
      setRow(response.data)
    }
    fetchUser()
  },[])

  async function handleDelete(id) {
    const result = await Swal.fire({
      title:'Are you sure?',
      text:'Do you really want to delete this policy?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button'
      }
      
    });
  
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:2025/deleteUser/${id}`);
        // toast.success(response.data);
        setRow((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error);
        // toast.error("Failed to delete the policy.");
      }
    }
  }

  
  const columns=[
    {field:'full_name',headerName:'full_name',width:100},
    {field:'email',headerName:'email',width:100},
    {field:'phone',headerName:'phone',width:100},
    {field:'address',headerName:'address',width:100},
    {field:'dob',headerName:'dob',width:100},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <div>
         
         <MdDeleteForever onClick={() => handleDelete(params.row._id)} fontSize={"2vw"} style={{margin:"20px"}}/>
                        </div>
      ),
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
export default User