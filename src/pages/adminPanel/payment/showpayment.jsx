import { useEffect, useState } from "react";
import AdminNav from "../../../component/adminNav/adminNav";
import './showpayment.css';
import axios from "axios";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2"; // Make sure you have Swal installed


function Payment() {
  const [row, setRow] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});

  useEffect(() => {
    async function fetchPayments() {
      try {
        const response = await axios.get("https://primeshield-backend.onrender.com/paymentsfetch");
        console.log("Fetched Payments:", response.data);
        setRow(response.data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    }
    fetchPayments();
  }, []);

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
        const response = await axios.delete(`https://primeshield-backend.onrender.com/deletePayment/${id}`);
        console.log("Delete Response:", response.data);

        setRow((prev) => prev.filter((item) => item._id !== id));
        Swal.fire("Deleted!", "The payment has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting payment:", error);
        Swal.fire("Error!", "Failed to delete the payment.", "error");
      }
    }
  }

  const columns = [
    { field: "amount", headerName: "Amount", width: 200 },
    { field: "paymentDate", headerName: "Payment Date", width: 200 },
    { field: "paymentStatus", headerName: "Payment Status", width: 200 },
    { field: "cardType", headerName: "Card Type", width: 200 },
    { field: "cardHolderName", headerName: "cardHolderName", width: 200 },
    { field: "formId", headerName: "formId", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <MdDeleteForever
          onClick={() => handleDelete(params.row._id)}
          fontSize={"1.5em"}
          style={{ cursor: "pointer", color: "red" }}
        />
      ),
    },
  ];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={row}
        columns={columns}
        getRowId={(row) => row._id} // Ensuring '_id' is used as unique row identifier
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default Payment;