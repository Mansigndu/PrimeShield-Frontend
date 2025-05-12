import './ourindustry.css'
function Ourindustry() {
    return(
        <>
        <div className="industrycontainer">
            <h3 className='industry1'>Why choose us</h3>
            <h1 className='industry2'>Our Insurance Policies</h1>
            <div className="industrybigbox">
                <div className="leftindustrybox">
                    
                        <h2>PolicyComparison Tool</h2>
                        <p className='industry-p'>Lets users compare different insurance plans side by side.</p>
                    
                        <h2 style={{marginTop:"7VW" }}> Customer Login Portal</h2>
                        <p className='industry-p'>Access policy details, documents, renewal options, and claims.</p>
                    </div>
                <div className="centerindustrybox"></div>
                <div className="rightindustrybox ">
                    <div className="right1industrybox">
                        <h2 className='industrybox1'>ProfessionalStaff</h2>
                        <p className='industry-p'>"Our professional staff is committed to providing reliable, personalized service to meet your insurance needs.</p>
                    </div>
                    <div className="right2industrybox">
                        <h2 className='industrybox2'>24/7Support</h2>
                        <p className='industry-p'>Expert staff with 24/7 support—always here when you need us.</p>
                    </div>
                </div>
            </div>
            
            
            </div>
            </>
        
    )
    
}
export default Ourindustry