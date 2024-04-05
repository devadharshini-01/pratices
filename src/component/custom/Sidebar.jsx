import { Link } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = (props) => {
  const data = [
    { name: "Distributor", path: "/Distributor" },
    { name: "Retailer", path: "/Retailer" },
  ];
  useEffect(() => {
    const currentPath = window.location.pathname;
    props.setActive(currentPath);
  }, [window.location.pathname]);
  return (
    <>
      <div className="list-group">
        <b className="red-color p-4">Vinobridge</b>
        {data.map((value) => {
          return (
            <Link to={value.path}>
              {" "}
              <p
                className={`${
                  props.active === value.path
                    ? " p-2 rounded-3 bg-color  text-white"
                    : "text-black"
                } p-2 hover list-group  fontsize `}
                onClick={() => props.setActive(value.path)}
              >
                {value.name}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Sidebar;
