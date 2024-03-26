import { Link } from "react-router-dom";

const Sidebar =(props)=>{
    return(
        <>
            <div className="list-group mt-3 ">

<Link to="/Dashboard">
  {" "}
  <p
    className={`${
      props.active === "Dashboard"
        ? "p-2 bg-white rounded-3  text-danger"
        : "text-primary"
    } p-2 fontsize hover  `}
    onClick={() => props.setActive("Dashboard")}
  >
  
    Dashboard
  </p>
</Link>
<Link to="/Userdetail" >
  {" "}
  <p
    className={`${
      props.active === "userdetail"
        ? " p-2 bg-white rounded-3  text-danger"
        : "text-primary"
    } p-2 hover list-group  fontsize `}
    onClick={() => props.setActive("userdetail")}
  >

    Userdetail
  </p>
</Link>
 

</div>
            

   
        </>
    )
}
export default Sidebar;