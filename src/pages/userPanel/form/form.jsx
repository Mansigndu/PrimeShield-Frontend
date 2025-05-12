import './form.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/authContex';

function SubmitForm() {
  const { id } = useParams(); // id = ApplyFor (ObjectId)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    
    Gender: '',
    MobileNumber: '',
    Address: '',
    FamilyMember: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const {auth,token} =  useContext(AuthContext)

  useEffect(()=>{
    if (!auth) {
      navigate('/login')
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:2025/handleForm/${id}`, formData,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      toast.success('Form submitted successfully');
      setFormData({
        Name: '',
       
        Gender: '',
        MobileNumber: '',
        Address: '',
        FamilyMember: '',
      });
      setTimeout(()=>{
        navigate(`/PaymentForm/${response.data._id}`)
      },2000)
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data || 'Submission failed');
    }
  };

  return (
    <div className="container border p-5 mt-3 w-50">
      <div className="row">
        <div className="col" id="text">
          Apply form
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col p-3 d-flex justify-content-center flex-column gap-3">
              <h4 className="ref">Name</h4>
              <input type="text" name="Name" value={formData.Name} onChange={handleChange} className="input" />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col p-3 d-flex justify-content-center flex-column gap-3">
              <h4 className="ref">Gender</h4>
              <select name="Gender" value={formData.Gender} onChange={handleChange} className="p-3 selct">
                <option value="">Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* <div className="row mt-2">
            <div className="col p-3 d-flex justify-content-center flex-column gap-3">
              <h4 className="ref">Email</h4>
              <input type="email" name="Email" value={formData.Email} onChange={handleChange} className="input" />
              <h6 className="name">example@gmail.com</h6>
            </div>
          </div> */}

          <div className="row p-3">
            <div className="col d-flex flex-column gap-2">
              <h4 className="ref">Mobile Number</h4>
              <input
                type="text"
                name="MobileNumber"
                value={formData.MobileNumber}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col p-4 d-flex flex-column gap-3">
              <h4 className="ref">Address</h4>
              <input type="text" name="Address" value={formData.Address} onChange={handleChange} className="ad-i" />
              <h6 className="name">Street Address</h6>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4 className="ref text-center">Family Member</h4>
              <input
                type="text"
                name="FamilyMember"
                value={formData.FamilyMember}
                onChange={handleChange}
                className="long"
              />
            </div>
          </div>

          <div className="row mt-5 p-2 text-center">
            <button type="submit" className="bbttn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SubmitForm;
