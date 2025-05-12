import { useContext, useEffect, useState } from 'react'
import './profile.css'
import ProfileContext from '../../../context/profileContext'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md"
import axios from 'axios'
import AuthContext from '../../../context/authContex'

function Profile() {
  const { profile } = useContext(ProfileContext)
  const { token } = useContext(AuthContext)

  const [apply, setApply] = useState([])

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get("http://localhost:2025/formuserDetails", {
          headers: {
            Authorization: `bearer ${token}`
          }
        })
        console.log(response)
        setApply(response.data)
      } catch (error) {
        console.error("Error fetching profile data:", error.response ? error.response.data : error.message)
      }
    }
    fetch()
  }, [token])

  return (
    <>
      <div className="container1">
        <div className="profile_back_1"></div>
        <div className="profile_back_box">
          <div className="profileboxs">
            <img src="images/mano.jpg" alt="" width={140} height={140} style={{ boxShadow: '2px 2px 2px 1px lightgrey' }} className='l-img' />
          </div>
          <div className="profile_text">
            <label htmlFor="full_name">Full Name: {profile.full_name}</label><br />
            <label htmlFor="email">Email: {profile.email}</label><br />
            <label htmlFor="phone">Phone: {profile.phone}</label><br />
            <label htmlFor="address">Address: {profile.address}</label><br />
            <label htmlFor="dob">DOB: {profile.dob}</label><br />
            <Link to={`/update/${profile._id}`} style={{ width: "70%" }}>
              <button className='profilebutton'>Edit</button>
            </Link>
          </div>
        </div>
      </div>

      {/* INSURANCE */}
      <div className="container-fluid p-2">
        <h1 className='text-center pb-2'>INSURANCE</h1>
        <div className="row px-5 text-center d-flex justify-content-center">
          {
            apply.filter(item => item.applyForType  === "Insurance1").length > 0 ? (
              apply.filter(item => item.applyForType === "Insurance1").map(item => (
                <div key={item._id} className="col-md-3 p-5 d-flex flex-column justify-content-between align-items-center gap-2 border rounded-3 m-2">
                  <h4>{item.ApplyFor.InsuranceName}</h4>
                  <h3 style={{color:"red",
                  textDecoration:"underline"
                  }}>{item.status}</h3>
                  <p className='p-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere hic nemo sapiente et...</p>
                 <Link to={`/Claim/${item.ApplyFor?._id}`}> <div className="bt rounded-5"><MdOutlineCancel className='cancel' /></div></Link>
                </div>
              ))
            ) : (
              <h2 className='text-muted'>No applications found for Insurance.</h2>
            )
          }
        </div>
      </div>

      {/* POLICY */}
      <div className="container-fluid p-2">
        <h1 className='text-center pb-2'>POLICY</h1>
        <div className="row px-5 text-center d-flex justify-content-center">
          {
            apply.filter(item => item.applyForType === "policy").length > 0 ? (
              apply.filter(item => item.applyForType === "policy").map(item => (
                <div key={item._id} className="col-md-3 p-5 d-flex flex-column justify-content-between align-items-center gap-2 border m-2 rounded-3">
                  <h4>{item.ApplyFor.policy_name}</h4>
                  <h3 style={{color:"red",
                  textDecoration:"underline"
                  }}>{item.status}</h3>
                  <p className='p-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere hic nemo sapiente et...</p>
                  <Link to={`/Claim/${item.ApplyFor?._id}`}> <div className="bt rounded-5"><MdOutlineCancel className='cancel' /></div></Link>
                </div>
              ))
            ) : (
              <h2 className='text-muted'>No applications found for Policy.</h2>
            )
          }
        </div>
      </div>

    </>
  )
}

export default Profile
