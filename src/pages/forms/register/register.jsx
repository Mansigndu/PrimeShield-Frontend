import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import './register.css';
import PhoneInput from 'react-phone-input-2'
import 'react-toastify/dist/ReactToastify.css';


function Register() {

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    dob: ''
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({name , value})
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {

      const response = await axios.post('http://localhost:2025/addUser', formData);


      toast.success('Registration successful');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        dob: ''
      })

      setTimeout(() => navigate('/login'), 2000);

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };

  return (
    <>
      <div className="Register-container">
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>

            <label htmlFor="full_name">Full Name</label>
            <br />
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <PhoneInput
            country={"us"}
            value={formData.phone}
            containerStyle={{width:"90%",padding:"10px",display:"flex",
              flexDirection:"column",
              alignItems:"start"
              ,justifyContent:"space-evenly"


            }}
            inputStyle={{width:"95%",marginTop:"10px",marginLeft:"-10px",border:"1px solid black"}}
            onChange={(value) => setFormData({...formData,phone:value})}
            inputProps={{
              name:"phone",
              required: true,
              autoFocus: true
            }}/>
            <br />



            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="address">Address</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="dob">Date of Birth</label>
            <br />
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <br />

            <button type="submit" >
              Submit
            </button>

            <Link to="/login">Click For Login</Link>
          </form>
        </div>
        <ToastContainer
        position="top-right" // Position: "top-right", "top-center", "top-left", etc.
        autoClose={2000} // Time (in ms) before auto-closing
        hideProgressBar={false} // Show/hide progress bar
        newestOnTop={false} // New toasts stack on top
        closeOnClick
        rtl={false} // Right-to-left layout
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      </div>
    </>
  );
}

export default Register;
