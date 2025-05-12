import { useEffect, useState } from "react";
import AdminNav from "../../../component/adminNav/adminNav";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { AiFillCloseSquare } from "react-icons/ai";
import { format } from "date-fns"; // Import date-fns for formatting the date

function Claims() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchClaims() {
      const response = await axios.get('http://localhost:2025/claimAttain');
      console.log(response);
      setRows(response.data);
    }
    fetchClaims();
  }, []);

  const handleUpdate = async (claimId, status) => {
    try {
      // Send PUT request to backend to update the claim status
      const response = await axios.put(`http://localhost:2025/updateClaimStatus/${claimId}`, {
        status,
      });
      console.log("Updated claim status:", response.data);

      // Update the state to reflect the changes in the UI
      setRows((prevRows) =>
        prevRows.map((row) =>
          row._id === claimId ? { ...row, claimStatus: status } : row
        )
      );
    } catch (error) {
      console.error("Error updating claim status:", error);
    }
  };

  // Format the createdAt date
  const formatDate = (dateString) => {
    return format(new Date(dateString), "yyyy-MM-dd HH:mm:ss"); // Format as 'YYYY-MM-DD HH:MM:SS'
  };

  const columns = [
    { field: 'userId', headerName: 'userPolicyId', width: 100 },
    {
      field: 'createdAt',
      headerName: 'claimDate',
      width: 200,
      renderCell: (params) => {
        return <span>{formatDate(params.row.createdAt)}</span>; // Apply date formatting
      },
    },
    { field: 'claimAmount', headerName: 'claimAmount', width: 230 },
    { field: 'claimStatus', headerName: 'claimStatus', width: 230 },
    { field: 'reason', headerName: 'reason', width: 230 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 350,
      renderCell: (params) => {
        return (
          <>
            <TiTick
              onClick={() => handleUpdate(params.row._id, "approved")}
              fontSize={"2vw"}
              style={{ margin: "20px", cursor: "pointer", color: "green" }}
            />
            <AiFillCloseSquare
              onClick={() => handleUpdate(params.row._id, "disapproved")}
              fontSize={"2vw"}
              style={{ margin: "20px", cursor: "pointer", color: "red" }}
            />
          </>
        );
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}  // Use '_id' as the unique identifier
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default Claims;
