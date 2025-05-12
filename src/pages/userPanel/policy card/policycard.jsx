import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './policycard.css'

function PolicyCard() {
    const [poliData, setPoliData] = useState([])

    useEffect(() => {
        async function fetchPolicyData() {
            try {
                const response = await axios.get(`https://primeshield-backend.onrender.com/retrivePolicy`)
                setPoliData(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPolicyData()
    }, [])

    return (
        <div className="policy-container">
            {poliData.map((policy) => (
                <div key={policy._id} className="policy-card">
                                         <img src="/public/images/cardlogo.png" alt="Insurance Icon" className="policy-image" />

                    <h2 className="policy-title">{policy.policy_name}</h2>
                    <p className="policy-type">{policy.policy_type}</p>
                    <div className="policy-details">
                        <p><strong>Coverage:</strong> ₹{policy.coverage_amount}</p>
                        <p><strong>Premium:</strong> ₹{policy.premium_amount}</p>
                    </div>
                    <p className="policy-description">
                        Secure your life with our comprehensive insurance plan tailored for your needs.
                    </p>
                    <Link to={`/submitForm/${policy._id}`} className="policy-button-link">
                        <button className="policy-button">Apply Now</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PolicyCard
