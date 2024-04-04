import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar bg-white mt-4 rounded-3">
        <div class="container-fluid">
          <a class="navbar-brand red-color " href="#">
          
    <b>Distributor</b> 
          </a>
          <div class="dropdown">
           <span class="badge text-bg-danger">D</span>
            <button
              class="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            
            </button>

            <ul class="dropdown-menu">
              <li>
                <Link to="/" class="dropdown-item">
                  Change Password
                </Link>
                <Link to="/" class="dropdown-item">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
