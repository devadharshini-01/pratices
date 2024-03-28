import { useDispatch, useSelector } from "react-redux";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import Table from "../component/custom/Table";
import { useEffect, useState } from "react";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Distributor = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const type =
    window.location.pathname === "/Distributor" ? "DISTRIBUTOR" : "RETAILER";
  const selector = useSelector((state) => state.userlist.userlistapi);
  console.log(selector, "select");
  const [userDetail, setUserDetail] = useState({
    userType: type,
    sortBy: "joinedDate:DESC",
    page: 1,
    size: 10,
  });

  useEffect(() => {
    dispatch(UsersListApiAction(userDetail));
  }, [type]);
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
              headersName={[
                "displayId",
                "companyName",
                "address",
                "monthlySales",
                "joinedDate",
              ]}
              data={selector?.data?.data?.items}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Distributor;
