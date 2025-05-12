import{Link,useNavigate}  from 'react-router-dom'
import{toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import AdminNav from "../../../component/adminNav/adminNav"
import './addIsurance.css'
import { useState } from 'react'
function AddInsurance() {
    const[formData,setFormData] = useState({
        InsuranceName:'',
        InsurancePrice:'',
        InsuranceTiming:'',
    });
    const  navigate = useNavigate();

    const handleChange=(e)=>{
        const{name,value} = e.target;

        setFormData((prevData) =>({
            ...prevData,
            [name]:value
        }));
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2025/post', formData);
            console.log(response.data)
            // localStorage.setItem('userInfo',JSON.stringify(response.data))
            toast.success('Insurance Add Successful');
            setFormData({
                InsuranceName:'',
                InsurancePrice:'',
                InsuranceTiming:'',
                


            })
            // setTimeout(()=> navigate('/login'),2000);
        } catch (error) {
            console.log(error)
            if(error.response){
                toast.error(error.response.data|| 'Registration failed.Please try again.');
            }
            
        }
    };

    return(
        <>
        {/* <AdminNav/> */}
        <div className="AddInsurancecontainer">
            <div className="Insuranceform">
            <form onSubmit={handleSubmit}>
                <h1>Insurance Form</h1>
                <label htmlFor="InsuranceName">Insurance Name</label><br />
                <input type="text" id="InsuranceName" name="InsuranceName" value={formData.InsuranceName} onChange={handleChange} /><br />
                <label htmlFor="InsurancePrice">Insurance Price</label><br />
                <input type="text" id="InsurancePrice" name="InsurancePrice" value={formData.InsurancePrice} onChange={handleChange} /><br />
                <label htmlFor="InsuranceTiming">Insurance Timing</label><br />
                <input type="text" id="InsuranceTiming" name="InsuranceTiming" value={formData.InsuranceTiming} onChange={handleChange} /><br />
                
                <button>Submit</button>
            </form>
            <ToastContainer/>
            </div>

        </div>
        
    
        </>
    )
}

export default AddInsurance