import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';  // Import SweetAlert2
import './claim.css';

const ExpandClaimForm = () => {
    const [claimAmount, setClaimAmount] = useState("");
    const [reason, setReason] = useState("");
    const [cancelForType, setCancelForType] = useState("Insurance1");

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:2025/policyInsurance/${id}`);
                setClaimAmount(response.data.coverage_amount || response.data.InsurancePrice);
                response.data.policy_type ? setCancelForType("policy") : setCancelForType("Insurance1");
            } catch (error) {
                console.error(error);
                toast.error("Error fetching policy details");
            }
        }
        fetchData();
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show SweetAlert2 confirmation before submitting
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "Once cancelled, you won't be able to retrieve this again.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit claim!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                const claimData = {
                    claimAmount,
                    reason,
                    cancelFor: id,
                    cancelForType
                };

                const userDetail = localStorage.getItem("userInfo");
                const authentication = JSON.parse(userDetail);

                const response = await axios.post(
                    `http://localhost:2025/expandclaim/${id}`,
                    claimData,
                    {
                        headers: {
                            Authorization: `Bearer ${authentication.token}`
                        }
                    }
                );

                toast.success("Claim successfully created!");
                
                setTimeout(() => {
                    navigate("/pro");
                }, 2000);
                console.log(response.data);
            } catch (err) {
                toast.error(err.response.data);
                console.error(err);
            }
        }
    };

    return (
        <div>
            <h2>Submit a New Claim</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Claim Amount</label>
                    <input
                        type="text"
                        value={claimAmount}
                        onChange={(e) => setClaimAmount(e.target.value)}
                        required
                        readOnly
                    />
                </div>

                <div>
                    <label>Reason</label>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={!reason}>
                    Submit Claim
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default ExpandClaimForm;
