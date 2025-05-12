import{Link,useNavigate} from 'react-router-dom'
import{toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import AdminNav from "../../../component/adminNav/adminNav";
import './AddPolicies.css'
import { useContext, useState } from 'react';
import AuthContext from '../../../context/authContex';
function AddPolicies() {
    const[formData,setFormData]= useState({
        policy_name:'',
        policy_type:'',
        coverage_amount:'',
        premium_amount:'',
        
        terms_conditions:'',
    });
    const navigate = useNavigate();
    const {token} = useContext(AuthContext)
    // console.log(token)

    const handleChange=(e)=>{
        const{name,value} = e.target;
        console.log({name,value})
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }));
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('https://primeshield-backend.onrender.com/addpolicy',formData,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            console.log(response.data)
            //localStorage.setItem('userInfo',JSON.stringify(response.data))
            toast.success('Add Policy successful');
            setFormData({
                policy_name:'',
                policy_type:'',
                coverage_amount:'',
                premium_amount:'',
                
                terms_conditions:'',
            })
            // setTimeout(()=>navigate('/login'),2000);
        } catch (error) {
            console.log(error)
            if(error.response){
                toast.error(error.response.data||'Registration failed. Please try again.');
            }
            
        }
    };
    return(
        <>
        {/* <AdminNav/> */}
        <div className="AddPoliciescontainer">
           <form action="" className="formbox" onSubmit={handleSubmit}>
            <h1>Policy Form</h1>
            <label htmlFor="PoliciesName"> Policy name</label><br />
            <input type="text" id='policy_name' name='policy_name'
            value={formData.policy_name} onChange={handleChange} /><br />

            <label htmlFor="PolicyType">Policy Type</label><br />
            <input type="text" id='policy_type:' name='policy_type' 
            value={formData.policy_type} onChange={handleChange}/><br />

            <label htmlFor="CoverageAmount">Coverage Amount</label><br />
            <input type="text" id='coverage_amount' name='coverage_amount'
            value={formData.coverage_amount}onChange={handleChange}/><br />

            <label htmlFor="PremiumAmount">Premium Amount</label><br />
            <input type="text" id='premium_amount' name='premium_amount' value={formData.premium_amount}onChange={handleChange}/><br />
           
           
             <label htmlFor="TermsConditions">Terms Condition</label><br />
             <input type="text" id='terms_conditions' name='terms_conditions' value={formData.terms_conditions}onChange={handleChange} /><br /> 
            
             <button>Submit</button>
            </form>
            <ToastContainer/>
             </div>
             </>
    )
    
}
export default AddPolicies