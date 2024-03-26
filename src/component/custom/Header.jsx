import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

const Header = ()=>{
    const navigate=useNavigate();
    return(
        <>
      

      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
    <div class="dropdown">
    <Icon className="icon" icon="gridicons:user-circle" width="25" height="25"  />
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Devadharshini
  </button>

  <ul class="dropdown-menu">
    <li><Link to="/" class="dropdown-item" >Logout</Link></li>

  </ul>
</div>
  </div>

</nav>
        </>
    )
}
export default Header;