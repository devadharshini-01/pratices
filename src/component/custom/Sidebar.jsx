import { Link } from "react-router-dom";
import { UsersListApiAction } from "../../Redux/Action/UsersListApiAction";
import { useDispatch } from "react-redux";

const Sidebar = (props) => {
  // const dispatch = useDispatch();
  const data = [
    "Dashboard",
    "userDetail",
"Distributor",
"Retailer",
] 


  return (
    <>
      {/* <div className="list-group mt-4 p-2">
      <b className="red-color " >vinobridge</b>
        <Link to="/Dashboard">
          {" "}
          <p
            className={`${
              props.active === "Dashboard"
                ? "p-2 sidebar rounded-3 mt-3  text-white"
                : "text-black"
            } p-2 fontsize  a:link `}
            onClick={() => props.setActive("Dashboard")}
          >
            Dashboard
          </p>
        </Link>
        <Link to="/Userdetail">
          {" "}
          <p
            className={`${
              props.active === "userdetail"
                ? " p-2 bg-white rounded-3 mt-3 text-white"
                : "text-black"
            } p-2  list-group  fontsize `}
            onClick={() => props.setActive("userdetail")}
          >
            Userdetail
          </p>
        </Link>

        <Link to="/Distributor">
          {" "}
          <p
            className={`${
              props.active === "distributor"
                ? " p-2 bg-danger rounded-3 mt-3  text-white"
                : "text-black"
            } p-2 hover list-group  fontsize `}
            onClick={() => props.setActive("distributor")}
          >
            Distributor
          </p>
        </Link>
        <Link
          to="/retailer"
          // onClick={() => dispatch(UsersListApiAction({ type: "LIST_RESET" }))}
        >
          {" "}
          <p
            className={`${
              props.active === "distributor"
                ? " p-2 bg-danger rounded-3 mt-3 text-white"
                : "text-black"
            } p-2 hover list-group  fontsize `}
          >
            Retailer
          </p>
        </Link>
      </div> */}
    
      <div className="list-group">
        <b className="red-color p-4">Vinobridge</b>
      {data.map((value)=>{
        return(
          <Link to={`/${value}`}>
          {" "}            <p
            className={`${
              props.active === value
                ? " p-2 bg-danger rounded-3  text-white"
                : "text-black"
            } p-2 hover list-group  fontsize `}
            onClick={() => props.setActive(value)}
          >
            {value }
          </p>
        </Link>
        )
      })}
      </div>
   
    </>
  );
};
export default Sidebar;
