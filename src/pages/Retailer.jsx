import React, { useEffect } from "react";
import Table from "../component/custom/Table";
import { useDispatch, useSelector } from "react-redux";
import { DistributorListAction } from "../Redux/Action/DashboardApiAction";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";

const Retailer = () => {
  const dispatch = useDispatch();
  const DistributorData = useSelector(
    (state) => state.userlist.userlistapi
  );
  console.log("GetDistributorList::", DistributorData);

  useEffect(() => {
    dispatch(
        UsersListApiAction({
        userType: "RETAILER",
        sortBy: "joinedDate:DESC",
        page: 1,
        size: 10,
      })
    );
  },[]);
  return (
    <div>
      <Table data={DistributorData?.data?.data?.items}  headersName={[
                "displayId",
                "companyName",
                "address",
                "inventoryManagementSystem",
                "noOfMappedRetailers",
                "monthlyOrders",
                "monthlySales",
                "joinedDate",
              ]} />
    </div>
  );
};

export default Retailer;
