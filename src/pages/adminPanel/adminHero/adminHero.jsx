import { Link } from "react-router-dom";
import './adminHero.css'
import AdminNav from "../../../component/adminNav/adminNav";

function AdminHero() {
    return (
        <>
        {/* <AdminNav/> */}
            <div className="admin-container">
                <div className="heading">
                    <h1>Admin Panel</h1>
                </div>
                <div className="bigbox">
                    <div className="imagebox"></div>
                    <div className="textbox">
                        <h1>Welcome Admin</h1>
                        <p>The admin panel of our general insurance platform is designed to provide complete control over policy management, customer onboarding, and claims processing. Built with a focus on trust, transparency, and efficiency, the panel empowers administrators to oversee diverse insurance categories such as health, motor, property, and travel. Real-time data insights, secure user management, and automated workflows help ensure that every policyholder receives timely and reliable service, reinforcing the core values of a dependable insurance provider.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminHero