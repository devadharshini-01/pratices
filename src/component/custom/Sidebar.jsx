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
   
    
      <div className="list-group">
        <b className="red-color p-4">Vinobridge</b>
      {data.map((value)=>{
        return(
          <Link to={`/${value}`}>
          {" "}            <p
            className={`${
              props.active === value
                ? " p-2 rounded-3 bg-color  text-white"
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
