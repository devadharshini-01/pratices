import { Link } from "react-router-dom";
import { UsersListApiAction } from "../../Redux/Action/UsersListApiAction";
import { useDispatch } from "react-redux";

const Sidebar = (props) => {
  // const dispatch = useDispatch();
  return (
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
        <Link to="/Userdetail">
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

        <Link to="/Distributor">
          {" "}
          <p
            className={`${
              props.active === "distributor"
                ? " p-2 bg-white rounded-3  text-danger"
                : "text-primary"
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
                ? " p-2 bg-white rounded-3  text-danger"
                : "text-primary"
            } p-2 hover list-group  fontsize `}
          >
            Retailer
          </p>
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
