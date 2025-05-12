import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AuthContext from '../../../context/authContex';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    paymentDate: '',
    paymentStatus: '',
    cardType: '',
    cardHolderName: '',
    lastFourDigits: '',
    expirationDate: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:2025/formGetById/${id}`);
        console.log(response);
        setFormData({
          amount: response.data.ApplyFor.coverage_amount || response.data.ApplyFor.InsurancePrice, // Adjust based on your response
          paymentDate: '',
          paymentStatus: '',
          cardType: '',
          cardHolderName: '',
          lastFourDigits: '',
          expirationDate: ''
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:2025/payments/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success('Payment submitted successfully!');

      // Reset form data after successful submission
      setFormData({
        amount: '',
        paymentDate: '',
        paymentStatus: '',
        cardType: '',
        cardHolderName: '',
        lastFourDigits: '',
        expirationDate: ''
      });

      setTimeout(() => navigate('/'), 2000); // Redirect to home or dashboard
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Payment Form
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Amount (Read-Only) */}
          <TextField
            fullWidth
            label="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            type="number"
            required
            sx={{ marginBottom: 2 }}
            InputProps={{ readOnly: true }} // Set the amount field to read-only
          />

          {/* Payment Date */}
          <TextField
            fullWidth
            label="Payment Date"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
            type="date"
            InputLabelProps={{ shrink: true }}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Payment Status
          <FormControl fullWidth required sx={{ marginBottom: 2 }}>
            <InputLabel>Payment Status</InputLabel>
            <Select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
            >
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="failed">Failed</MenuItem>
            </Select>
          </FormControl> */}

          {/* Card Type (Dropdown) */}
          <FormControl fullWidth required sx={{ marginBottom: 2 }}>
            <InputLabel>Card Type</InputLabel>
            <Select
              name="cardType"
              value={formData.cardType}
              onChange={handleChange}
            >
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="MasterCard">MasterCard</MenuItem>
              <MenuItem value="AmericanExpress">American Express</MenuItem>
              <MenuItem value="Discover">Discover</MenuItem>
            </Select>
          </FormControl>

          {/* Cardholder Name */}
          <TextField
            fullWidth
            label="Cardholder Name"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Last Four Digits of the Card */}
          <TextField
            fullWidth
            label="Last Four Digits"
            name="lastFourDigits"
            value={formData.lastFourDigits}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
            inputProps={{ maxLength: 4 }}
          />

          {/* Expiration Date */}
          <TextField
            fullWidth
            label="Expiration Date (MM/YY)"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Submit Button */}
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Submit Payment
          </Button>
        </form>
      </Box>

      <ToastContainer />
    </>
  );
};

export default PaymentForm;
