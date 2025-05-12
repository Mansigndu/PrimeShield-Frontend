import './services.css'
import { FaShieldHalved } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Services() {
    return (
        <>
            <div className="container-fluid p-5">
                <h5 className='text-center py-2'>OUR SERVICES</h5>
                <h1 className='text-center py-2 ' id='ser-t'>RELIABLE INSURANCE SOLUTIONS FOR YOUR<br />PEACE OF MIND</h1>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-3 d-flex justify-content-center align-items-center flex-column border m-2 py-5 gap-3 rounded-4 postion">
                        <FaShieldHalved fontSize={"3vw"} color='blue' className='ii' />
                        <h2>Vehicle Insurance</h2>
                        <p>Protect your car or bike against accidents, theft, and third-party liabilities with our comprehensive coverage options.</p>
                        <div className='ioo'><FaArrowRight /></div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center flex-column border m-2 py-5 gap-3 rounded-4 postion">
                        <FaChartPie fontSize={"3vw"} color='blue' className='ii' />
                        <h2>Health Insurance</h2>
                        <p>Access quality healthcare without financial stress. Our plans include hospitalization, critical illness, and family coverage.</p>
                        <div className='ioo'><FaArrowRight /></div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center flex-column border m-2 py-5 gap-3 rounded-4 postion">
                        <FaCode fontSize={"3vw"} color='blue' className='ii' />
                        <h2>Life Insurance</h2>
                        <p>Secure your family's future with life cover plans, offering death benefits and long-term financial support.</p>
                        <div className='ioo'><FaArrowRight /></div>
                    </div>

                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-md-3 d-flex justify-content-center align-items-center flex-column border m-2 py-5 gap-3 rounded-4 postion">
                            <FaOdnoklassniki fontSize={"3vw"} color='blue' className='ii' />
                            <h2>Travel Insurance</h2>
                            <p>Travel with confidence. We cover medical emergencies, cancellations, and lost baggage for domestic and international trips.</p>
                            <div className='ioo'><FaArrowRight /></div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center flex-column border m-2 py-5 gap-3 rounded-4 postion">
                            <FaSearch fontSize={"3vw"} color='blue' className='ii' />
                            <h2>Property Insurance</h2>
                            <p>Safeguard your home, office, or shop against fire, natural disasters, and theft with our reliable property insurance plans.</p>
                            <div className='ioo'><FaArrowRight /></div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center flex-column border m-2 py-5 gap-3 rounded-4 postion">
                            <h2>Call Us for a Quote</h2>
                            <p>Speak to our experts and get a customized insurance plan that suits your specific needs and budget.</p>
                            <div className="no">+234 3982 8787 623</div>
                            <div className='ioo'><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
