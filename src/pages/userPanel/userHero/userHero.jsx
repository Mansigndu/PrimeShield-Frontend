import { Link } from "react-router-dom"
import UserNav from "../../../component/userNav/userNav"
import SliderUser from "../UserHome/Slide"
import AboutUs from "../about/about"
import Ourindustry from "../ourindustry/ourindustry"


import Contact from "../contactUs/contactus"
import Clients from "../clients/clients"
import Members from "../members/members"
import Blog from "../Blog/blog"
import Logo from "../logo/logo"
import Footer from "../footer/footer"
import Slider from "../UserHome/slider"
import PolicyCard from "../policy card/policycard"
import Services from "../services/services"
import Pricing from "../pricing/pricing"

function UserHero(params) {
    return(
        <>
        {/* <UserNav/> */}
        <SliderUser/>
        <AboutUs/> 
        <Ourindustry/>
        < Pricing/>
        <Services/>
        <Contact/>
        {/* <Clients/> */}
        <Slider/>
        <br />
        <br />
        <Members/>
        <Blog/>
        <Logo/>
        
        <Link to={'/assistant'}> <div className="assistant" style={{
                width: "100px",
                height: "100px",
                border: "2px solid black",
                borderRadius: "50px",
                position: "fixed",
                zIndex: "10",
                right: "10px",
                bottom: "10px",
                overflow: "hidden", // ensures the gif stays within the circle
                boxShadow:"2px 2px 5px gray"

            }}>
                
                <img
                    src="/images/ai.gif"
                    alt="Assistant"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover" // ensures the gif covers the div nicely
                    }}
                />
            </div>
            </Link>
        <Footer/>
        {/* <Slider/> */}
        
        
        
        
        
        
        </>
    )

}

export default UserHero