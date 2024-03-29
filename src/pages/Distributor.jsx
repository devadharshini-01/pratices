import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import Table from "../component/custom/Table";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

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
      <Header />
      <div className="row">
        <div className="col-2 sidebor">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="col-10">
          <div className="card mt-4">
            <Table
              headersName={userDetail.userType=="RETAILER"?[
                "displayId",
                "companyName",
                "address",
                "monthlySales",
                "joinedDate",
                "Actions",
                
              ]:[
                "displayId",
                "companyName",
                "address",
                "monthlySales",
                "joinedDate",
                
                
              ]}
              data={selector?.data?.data?.items}
              isLoading={selector?.loading}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Distributor;
