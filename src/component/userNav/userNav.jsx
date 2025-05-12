import { Link } from "react-router-dom";
import './userNav.css'
import { useContext } from "react";
import AuthContext from "../../context/authContex";
import { useNavigate } from "react-router-dom";

function UserNav() {
    const { auth, logout } = useContext(AuthContext);
    console.log(auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
            <div className="box">
                <div className="leftbox">
                    <img className="imglogo" src="./public/Images/navlogo.png" alt="img" width={"200px"} height={"100px"} />
                </div>

                {/* Navbar part */}
                <div className="centerbox">
                    <nav className="navbar navbar-expand-lg bg-transparent">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/'}>Home</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/ins'}>Insurances</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/poli'}>Policy</Link>
                                    </li>

                                     {/* Conditionally render Profile link if the user is authenticated */}
                                     {auth && (
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/useClaim'}>Claims</Link>
                                        </li>
                                    )}

                                    {/* Conditionally render Profile link if the user is authenticated */}
                                    {auth && (
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/pro'}>Profile</Link>
                                        </li>
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Navbar part end */}

                <div className="rightbox">
                    {/* If the user is logged in, show "Logout", otherwise show "SignUp" and "Signin" */}
                    {auth ? (
                        <button className="button1" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button className="button1"><Link to={'/register'} style={{ textDecoration: 'none', color: "white" }}>Sign Up</Link></button>
                            <button className="button2"><Link to={'/login'} style={{ textDecoration: 'none', color: "white" }}>Sign In</Link></button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default UserNav;
