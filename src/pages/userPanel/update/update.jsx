import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import './update.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

import 'react-toastify/dist/ReactToastify.css';


function Update() {

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        dob: ''
    });


    const navigate = useNavigate();
    const { id } = useParams()
    console.log(id)
    const [user, setUser] = useState({})

    useEffect(() => {
        async function fetchuser(id) {
            try {
                const response = await axios.get(`http://localhost:2025/getUser/${id}`)
                console.log(response)
                setUser(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchuser(id)
    }, [])

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

            const response = await axios.put(`http://localhost:2025/updateUser/${id}`, formData, {
                headers: { 'Content-Type': 'application/json' },
            });


            toast.success('Update successful');
            setFormData({
                full_name: '',
                email: '',
                phone: '',
                password: '',
                address: '',
                dob: ''
            })

            setTimeout(() => navigate('/Profile'), 2000);

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data);
            }
        }
    };
    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            setFormData({
                full_name: user.full_name || '',
                email: user.email || '',
                phone: user.phone?.toString() || '',

                password: user.password || '',
                address: user.address || '',
                dob: user.dob || ''
            });
        }
    }, [user]);
    
    console.log(user.phone)

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

                        <label htmlFor="email">Phone</label>
                        <br />
                        <PhoneInput
                            country={'us'}
                            value={formData?.phone}
                            onChange={(value) => setFormData({ ...formData, phone: value })}
                            placeholder='Enter your phone number'
                            inputProps={{
                                name: "phone",
                                required: true,
                            }}
                            inputStyle={{ width: "100%" }}
                            containerStyle={{ width: "270px", borderRadius: "20px" }}
                        />

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
                    pauseOnHover />
            </div>
        </>
    );
}

export default Update;
