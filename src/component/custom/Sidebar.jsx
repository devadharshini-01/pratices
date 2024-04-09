import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";
import {  DistributorData, RetailerData, sidebarData } from "../../Constant/index";


const Sidebar = (props) => {
  const [currentSidebarData, setCurrentSidebarData] = useState([]);
  useEffect(() => {
    const currentPath = window.location.pathname;
    props.setActive(currentPath);
    // if (currentPath === "/Distributor") {
    //   setCurrentSidebarData(DistributorData);
    // } else if (currentPath === "/Retailer") 
    //   setCurrentSidebarData(RetailerData);
   
  
  }, [window.location.pathname]);


 
  return (
    <>
      <div className="list-group">
        <b className="red-color p-4">Vinobridge</b>
        {Array.isArray(sidebarData) && sidebarData?.map((value) => {
          return (
            <Link to={value.path} >
           
              {" "}
              <p
                className={`${
                  props.active === value.path? DistributorData:RetailerData
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
