import { useEffect, useState } from 'react'
import './cardInsurance.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Card() {
    const [insData, setInsData] = useState([])

    useEffect(() => {
        async function fetchInsuranceData() {
            try {
                const response = await axios.get(`https://primeshield-backend.onrender.com/insget`)
                setInsData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchInsuranceData()
    }, [])

    return (
        <div className="insurance-container">
            <div className="insurance-grid">
                {insData.map((data) => (
                    <div key={data._id} className="insurance-card">
                       <img src="/public/images/cardlogo.png" alt="Insurance Icon" className="policy-image" />

                        <h4 className="insurance-name">{data.InsuranceName}</h4>
                        <h5 className="insurance-price">₹{data.InsurancePrice}</h5>
                        <p className="insurance-description">
                            Protect your assets and well-being with this reliable insurance plan.
                        </p>
                        <Link to={`/submitForm/${data._id}`} className="insurance-button-link">
                            <button className="insurance-button">Apply Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
