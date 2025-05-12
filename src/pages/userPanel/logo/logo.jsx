import'./logo.css'
import { IoLogoReact } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { SiCommerzbank } from "react-icons/si";
import { AiFillInsurance } from "react-icons/ai";
import { TbBrandBinance } from "react-icons/tb";


function Logo() {
    return(
        <>
        <div className="biglogo">
        <h4><IoLogoReact fontSize={"6vw"} /></h4>
        <h4 ><MdOutlinePolicy  fontSize={"6vw"} /></h4>
        <h4 ><SiCommerzbank  fontSize={"6vw"} /></h4>
        <h4 ><AiFillInsurance  fontSize={"6vw"}/></h4>
        <h4> <TbBrandBinance fontSize={"6vw"}/></h4>
        </div>
        
        </>
    )
    
}
export default Logo