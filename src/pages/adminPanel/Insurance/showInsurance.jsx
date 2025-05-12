import { useEffect, useState } from "react";
import AdminNav from "../../../component/adminNav/adminNav";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import './showinsurance.css'
import Swal from 'sweetalert2';
import { Modal, Box, TextField, Button } from '@mui/material'; // Importing Material-UI Modal

function Insurance() {
  const [row, setRow] = useState([]);
  const [openModal, setOpenModal] = useState(false); // For modal visibility
  const [insuranceDetails, setInsuranceDetails] = useState({}); // For storing current insurance details for editing
  
  useEffect(() => {
    async function fetchInsurance() {
      try {
        const response = await axios.get('https://primeshield-backend.onrender.com/insGet');
        console.log(response);
        setRow(response.data);
      } catch (error) {
        console.error("Error fetching insurance:", error);
      }
    }
    fetchInsurance();
  }, []);

  async function handleDelete(id) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this policy?',
      icon: 'warning',
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
        const response = await axios.delete(`https://primeshield-backend.onrender.com/deleteInsu/${id}`);
        setRow((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleUpdate(id) {
    // Find the insurance details by id
    const insurance = row.find((item) => item._id === id);
    setInsuranceDetails(insurance);
    setOpenModal(true); // Open the modal
  }

  function handleCloseModal() {
    setOpenModal(false); // Close the modal
  }

  async function handleSaveChanges() {
    try {
      const response = await axios.put(`https://primeshield-backend.onrender.com/updateInsurance/${insuranceDetails._id}`, insuranceDetails);
      setRow((prev) =>
        prev.map((item) =>
          item._id === insuranceDetails._id ? { ...item, ...insuranceDetails } : item
        )
      );
      setOpenModal(false); // Close the modal after saving
    } catch (error) {
      console.error("Error updating insurance:", error);
    }
  }

  const columns = [
    { field: 'InsuranceName', headerName: 'InsuranceName', width: 100 },
    { field: 'InsurancePrice', headerName: 'InsurancePrice', width: 230 },
    { field: 'InsuranceTiming', headerName: 'InsuranceTiming', width: 230 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <div>
          <PiNotePencilBold
            onClick={() => handleUpdate(params.row._id)}
            fontSize={"2vw"}
            style={{ margin: "20px" }}
          />
          <MdDeleteForever
            onClick={() => handleDelete(params.row._id)}
            fontSize={"2vw"}
            style={{ margin: "20px" }}
          />
        </div>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={row}
          columns={columns}
          getRowId={(row) => row._id} // Use '_id' as the unique identifier
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>

      {/* Modal for Editing Insurance Details */}
      <Modal open={openModal} onClose={handleCloseModal} >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
            height:'60vh'
          }}
        >
          <h2>Edit Insurance</h2>
          <TextField
            label="Price"
            fullWidth
            value={insuranceDetails.InsurancePrice || ''}
            onChange={(e) =>
              setInsuranceDetails({ ...insuranceDetails, InsurancePrice: e.target.value })
            }
            margin="normal"
          />
          <TextField
            label="Timing"
            fullWidth
            value={insuranceDetails.InsuranceTiming || ''}
            onChange={(e) =>
              setInsuranceDetails({ ...insuranceDetails, InsuranceTiming: e.target.value })
            }
            margin="normal"
          />
          <div style={{ marginTop: '20px' }}>
            <Button onClick={handleSaveChanges} variant="contained" color="primary" style={{
              padding:'30px'
            }}>
              Save Changes
            </Button>
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' , padding:'30px'}}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Insurance;
