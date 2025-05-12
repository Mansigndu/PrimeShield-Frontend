import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { AiFillCloseSquare } from "react-icons/ai";
import './apply.css'
import Swal from 'sweetalert2'; // To show the confirmation dialog before deletion

function Apply() {
  const [row, setRow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://primeshield-backend.onrender.com/formGet');
        console.log(response);
        setRow(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  
  // Handle updating the status of a form
  async function handleUpdate(id, status) {
    try {
      const response = await axios.put(`https://primeshield-backend.onrender.com/updateStatus/${id}`, { status });
  
      // Update the row status locally after successful API call
      setRow((prevRows) =>
        prevRows.map((row) =>
          row._id === id ? { ...row, status } : row
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Handle deletion of a form
  async function handleDelete(id) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this form?',
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
        // Make the delete request
        await axios.delete(`https://primeshield-backend.onrender.com/deleteForm/${id}`);

        // Remove the deleted form from the state
        setRow((prevRows) => prevRows.filter((row) => row._id !== id));

        Swal.fire('Deleted!', 'The form has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting form:', error);
        Swal.fire('Error!', 'Failed to delete the form.', 'error');
      }
    }
  }

  const columns = [
    { field: 'Name', headerName: 'Name', width: 100 },
    { field: 'Gender', headerName: 'Gender', width: 100 },
    { field: 'Email', headerName: 'Email', width: 150 },
    { field: 'MobileNumber', headerName: 'MobileNumber', width: 200 },
    { field: 'Address', headerName: 'Address', width: 230 },
    { field: 'FamilyMember', headerName: 'FamilyMember', width: 140 },
    { field: 'status', headerName: 'Status', width: 140 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <div>
          <TiTick
            onClick={() => handleUpdate(params.row._id, "Accept")}
            fontSize={"2vw"}
            style={{ margin: "20px", cursor: "pointer" }}
          />
          <AiFillCloseSquare
            onClick={() => handleUpdate(params.row._id, "Reject")}
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
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        getRowId={(row) => row._id} // Use '_id' as the unique identifier
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 50]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default Apply;
