
import { useEffect, useState } from 'react'
// import './cardinsurance.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowClaim() {
const [claim ,setClaim] = useState([])

useEffect(()=>{
    async function fetchData() {
        try {
            const response =await axios.get('https://primeshield-backend.onrender.com/claimAttain')
            console.log(response)
            setClaim(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()

},[])



    return (
        <>


            <div className="cardInsurance">
                <div className="insideContainer">
             
                   {
                    claim.map((data)=>(
                        <div className="leftInsurance">
                  
                        <img src="images/testimonial-1.jpg" alt="" width={100} height={100}  className='l-img' />
                   
                    <h4>{data.cancelForType == "Insurance1"? "Insurance":"Policy"}</h4>
                    <h5>Amount : {data.claimAmount}</h5>
                   
                    <div className="Cards">
                        <p className='q'>Reason : {data.reason}</p>
                        <h3>Application Status : {data.claimStatus}</h3>
                    </div>
                    

                </div>
                    ))
                   }
             

</div>

            </div>




        </>



    )


}




export default ShowClaim