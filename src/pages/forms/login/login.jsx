import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import axios from 'axios'; 
import AuthContext from '../../../context/authContex';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
const {setAuth,setToken} = useContext(AuthContext)
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

            const response = await axios.post('https://primeshield-backend.onrender.com/userLogin', formData);
            console.log(response.data)

            const obj = {
                authType : response.data.authtype,
                token : response.data.token
            }
             localStorage.setItem("userInfo",JSON.stringify(obj))

             setToken(obj.token)
          
            setAuth(obj.authType);
            
            // localStorage.setItem('userInfo',JSON.stringify(response.data))


            toast.success('Login successful');
            setFormData({
                email: '',
                password: '',
            })
             if (obj.authType === "admin") {
                setTimeout(() => navigate('/admin'), 2000)
             }else{

                 setTimeout(() => navigate('/'), 2000);
             }


        } catch (error) {
            if (error.response) {
                toast.error(error.response.data);
            }
        }
    };


    return (
        <>
            <div className="Login-container">
                <div className="Login-form">
                    <form onSubmit={handleSubmit}>
                        <h1 className='loginH1'>Login</h1>
                        <label className='loginLabel' htmlFor="email">Email Id</label><br />
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} /><br />
                        <label className='loginLabel' htmlFor="password">Password</label><br />
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /><br /><br />
                        <button className='loginButton'>Submit</button>
                        <Link to={"/register"}>click here for register</Link>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default Login