import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContex.jsx";

function AdminNav() {
  const{ auth, logout } =useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout =() => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src={"/public/images/navlogo.png"} alt="" srcset="" width={"180px"} height={"100px"}/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-xl-flex flex-xl-row-reverse" id="navbarNavDropdown">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to={"/admin"}class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Claims
                </a>
                <ul class="dropdown-menu">
                
                  <li><Link to={"/claim"} class="dropdown-item" href="#">Show Claims</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Insurance
                </a>
                <ul class="dropdown-menu">
                
                  <li><Link to={"/addIsur"} class="dropdown-item" href="#">Add Insurances</Link></li>
                  <li><Link to={"/insurance"} class="dropdown-item" href="#">Show Insurances</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Payment
                </a>
                <ul class="dropdown-menu">
                
                  <li><Link to={"/payment"} class="dropdown-item" href="#">Show Payment</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Review
                </a>
                <ul class="dropdown-menu">
                  
                  <li><Link to={'/Review'} class="dropdown-item" href="#">Show Reviews</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Policies
                </a>
                <ul class="dropdown-menu">
                  <li><Link to={'/addPolicies'} class="dropdown-item" href="#">Add Polices</Link></li>
                  <li><Link to={'/policies'} class="dropdown-item" href="#">Show Polices</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 User Apply
                </a>
                <ul class="dropdown-menu">
                 
                  <li><Link to={'/applyTable'}class="dropdown-item" href="#">User Apply</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  users
                </a>
                <ul class="dropdown-menu">
                  <li><Link to={'/User'} class="dropdown-item" href="#">Show User</Link></li>
                  
                </ul>
              </li>
              {auth &&(
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
export default AdminNav;