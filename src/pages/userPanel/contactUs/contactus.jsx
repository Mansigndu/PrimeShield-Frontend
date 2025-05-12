
import { useContext, useState } from 'react';
import './contactus.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import AuthContext from '../../../context/authContex';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        reviewText: '',
    });

    const {auth ,token} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://primeshield-backend.onrender.com/joinreviews', formData,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            console.log(response.data);

            toast.success('Thank you for your feedback!');
            setFormData({
                name: '',
                reviewText: '',
            });

            
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Submission failed. Please try again.');
            }
        }
    };

    return (
        <>
            <div className="contactbigbox">
                <div className="leftcontactbox  d-flex flex-column justify-content-center px-5">
                    <h5 className='contactp'>REQUEST A QUOTE</h5>
                    <h2 className='contactp1'>Looking for Insurance? <br />We're Here to Help</h2><br />
                    <div className="left1contactbox">
                        <h6>Guaranteed Response Within 24 Hours</h6>
                        <span className="right1contactbox">
                            24/7 Phone & Email Support
                        </span>
                    </div>

                    <p className='contactp2'>
                        Whether you need auto, health, home, or travel insurance, we offer customized plans to fit your needs. 
                        Fill out the form to get a free quote or leave a review about your experience with our services.
                    </p>
                </div>

                <div className="rightcontactbox">
                    <form onSubmit={handleSubmit}>
                        <h3>Send Us a Message</h3>
                        <input
                            type="text"
                            name='name'
                            placeholder='Your Name'
                            required
                            value={formData.name}
                            onChange={handleChange}
                        /><br />

                        <textarea
                            name='reviewText'
                            placeholder='Your Message or Review'
                            required
                            value={formData.reviewText}
                            onChange={handleChange}
                            style={{ width: "80%" }}
                        /><br />

                       {
                        auth ? (
                            <button type='submit'>Submit</button>
                        ):
                       ( <p>Please Login First </p>)

                       }
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default Contact;
