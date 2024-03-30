import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import Table from "../component/custom/Table";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import   "../App.css";
import Search from "../component/custom/Search";
import Button  from "../component/custom/Button";
import { Icon, InlineIcon } from "@iconify/react";

const Distributor = ({ active, setActive }) => {
  const dispatch = useDispatch();
   
  const selector = useSelector((state) => state.userlist.userlistapi);
  const [userDetail, setuserDetail] = useState({
    userType:   "RETAILER",
    sortBy: "joinedDate:DESC",
    page: 1,
    size: 10,
  });
  useEffect(() => {
    setuserDetail({
      ...userDetail,
      userType:
        window.location.pathname === "/Distributor"
          ? "DISTRIBUTOR"
          : "RETAILER"
    });
  }, [window.location.pathname]);
  useEffect(() => {
    dispatch(UsersListApiAction(userDetail));
  }, [userDetail]);
  useEffect(() => {
    if (!selector?.loading) {
      if (selector?.data?.length === 0 && selector?.error?.error) {
        toast.error(selector?.error?.error);
      }
    }
  }, [selector?.error]);

  return (
    <>
    <div className="overflow-hidden">
      <div className="vh-100">
      <div className="row ">
        <div className="col-2 bg-white  rounded-end-5 ">
          <Sidebar active={active} setActive={setActive} />
        </div>
 
        <div className="col-10 ">
    <div className=" overflow-scroll vh-100 ">
    <Header />
        <div className="row">
          <div className="col-9 ">
          <Search/>
          </div>
        
          <div class=" col-3 d-flex gap-2 ">
          <Button buttonName="Add" color="white" Icon={<InlineIcon icon="uil:plus" width="15" height="15"  style={{color: "black"}} />}/>
         <Button buttonName="Invite" color="white" Icon={<InlineIcon  icon="mdi:account-multiple-plus" width="15" height="15"  style={{color:" black"}} />} />
</div>
        </div>
     
            <Table
              headersName={userDetail.userType=="RETAILER"?[
                {name:"displayId",displayName:"RetailerId"},
                {name:"companyName",displayName:"RetailerName"},
                {name:"address",displayName:"Location"},
                {name: "monthlySales",displayName:"joined Date"},
                {name: "joinedDate",displayName:"No of Locations"},
                {name: "Actions",displayName:"No of Orders"},
   
             
                
              ]:[
                {name:"displayId",displayName:"DistributorId"},
                {name:"companyName",displayName:"DistributorName"},
                {name:"address",displayName:"Location"},
                {name:"monthlySales",displayName:"ERP/INV System"},
                {name:"joineDate",displayName:"Linked Retailers"},
                {name:"joineDate",displayName:"Monthly Orders"},
            
                
                
              ]}
              
              data={selector?.data?.data?.items}
              isLoading={selector?.loading}
            />
    </div>
     
          </div>
        </div>
      </div>
    </div>
    
   

      <ToastContainer />
    </>
  );
};
export default Distributor;
