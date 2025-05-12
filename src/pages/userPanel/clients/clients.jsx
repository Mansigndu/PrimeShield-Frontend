import './clients.css'
import 'swiper/css'
import Slider from '../UserHome/slider'
function Clients() {
    return(
        <>
        
        <div className="clientsbigbox">
            <h3 className='clients1' >Testimonial</h3>
            <h1 className='clients2'>What Our Clients Say About <br />Our Digital Services</h1>
         
            <div className="smallclientbox">
            <div className="leftclientbox">
                
                <h2 className='clientbox1'>Client Name</h2>
                <h4 className='clientbox2'>Profession</h4>
                <p></p>
            </div>
            <div className="centerclientbox">
            <h2 className='clientbox1'>Client Name</h2>
            <h4 className='clientbox2'>Profession</h4>
            </div>
            <div className="rightclientbox">
            <h2 className='clientbox1'>Client Name</h2>
            <h4 className='clientbox2'>Profession</h4>
            </div>

            </div>
            
        </div>
        
        </>
    )
    

    
}
export default Clients