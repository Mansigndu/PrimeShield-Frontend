import { useEffect, useState } from "react";
import AdminNav from "../../../component/adminNav/adminNav";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import Swal from 'sweetalert2';
import './showpolicies.css'
import { Modal, Box, TextField, Button } from '@mui/material'; // Modal components

function Policies() {
  const [row, setRow] = useState([]);
  const [openModal, setOpenModal] = useState(false); // To control modal visibility
  const [currentPolicy, setCurrentPolicy] = useState({}); // For storing current policy details to edit

  useEffect(() => {
    async function fetchPolicy() {
      try {
        const response = await axios.get('https://primeshield-backend.onrender.com/retrivePolicy');
        
        const transformedData = response.data.map(item => ({
          _id: item._id,
          policy_name: item.policy_name,
          policy_type: item.policy_type,
          coverage_amount: item.coverage_amount,
          premium_amount: item.premium_amount,
          full_name: item.providerId?.full_name, 
        }));
        setRow(transformedData); 
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    }
  
    fetchPolicy();
  }, []);

  // Delete Policy
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
        await axios.delete(`https://primeshield-backend.onrender.com/policyDelete/${id}`);
        setRow((prev) => prev.filter((item) => item._id !== id)); // Remove deleted policy from table
      } catch (error) {
        console.log(error);
      }
    }
  }

  // Open modal to update policy
  function handleUpdate(id) {
    const policyToEdit = row.find((item) => item._id === id);
    setCurrentPolicy(policyToEdit);
    setOpenModal(true); // Open the modal
  }

  // Close modal
  function handleCloseModal() {
    setOpenModal(false);
  }

  // Handle saving updated policy
  async function handleSaveChanges() {
    try {
      const { _id, policy_name, policy_type, coverage_amount, premium_amount } = currentPolicy;

      const response = await axios.put(`https://primeshield-backend.onrender.com/updatePolicy/${_id}`, {
        policy_name,
        policy_type,
        coverage_amount,
        premium_amount
      });

      setRow((prev) => prev.map((item) =>
        item._id === _id ? { ...item, ...response.data } : item
      ));

      setOpenModal(false); // Close the modal
    } catch (error) {
      console.error("Error updating policy:", error);
    }
  }

  const columns = [
    { field: 'policy_name', headerName: 'Policy name', width: 150 },
    { field: 'policy_type', headerName: 'Policy type', width: 150 },
    { field: 'coverage_amount', headerName: 'Coverage amount', width: 230 },
    { field: 'premium_amount', headerName: 'Premium amount', width: 230 },
    { field: 'full_name', headerName: 'Provider name', width: 230 },
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
            style={{ margin: "20px", cursor: "pointer" }}
          />
          <MdDeleteForever
            onClick={() => handleDelete(params.row._id)}
            fontSize={"2vw"}
            style={{ margin: "20px", cursor: "pointer" }}
          />
        </div>
      ),
    }
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

      {/* Modal for updating policy */}
      <Modal open={openModal} onClose={handleCloseModal}>
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
          }}
        >
          <h2>Edit Policy</h2>
          <TextField
            label="Policy Name"
            fullWidth
            value={currentPolicy.policy_name || ''}
            onChange={(e) => setCurrentPolicy({ ...currentPolicy, policy_name: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Policy Type"
            fullWidth
            value={currentPolicy.policy_type || ''}
            onChange={(e) => setCurrentPolicy({ ...currentPolicy, policy_type: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Coverage Amount"
            fullWidth
            type="number"
            value={currentPolicy.coverage_amount || ''}
            onChange={(e) => setCurrentPolicy({ ...currentPolicy, coverage_amount: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Premium Amount"
            fullWidth
            type="number"
            value={currentPolicy.premium_amount || ''}
            onChange={(e) => setCurrentPolicy({ ...currentPolicy, premium_amount: e.target.value })}
            margin="normal"
          />
          <div style={{ marginTop: '20px' }}>
            <Button onClick={handleSaveChanges} variant="contained" color="primary">
              Save Changes
            </Button>
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Policies;
