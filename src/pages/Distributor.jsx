import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import Table from "../component/custom/Table";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";
import "../App.css";

import Button from "../component/custom/Button";
import { InlineIcon } from "@iconify/react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Input from "../component/custom/Input";

const Distributor = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.userlist.userlistapi);
  const [paginate, setPaginate] = useState();
  const [userDetail, setuserDetail] = useState({
    userType: "RETAILER",
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
          : "RETAILER",
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
const handleSort = (item) => {
    setuserDetail({ ...userDetail, sortBy: item });
  };
  const page = Math.ceil(selector?.data?.data?.totalCount / userDetail.size);
  const handlePageClick = (event) => {
    setuserDetail({ ...userDetail, page: event.selected + 1 });
    setPaginate(event.selected + 1);
  };
  const handleClick = (DD) => {
    navigate("/userdetail", { state: { DD } });
  };
  return (
    <>
      <div className="overflow-hidden">
        <div className="vh-100">
          <div className="row ">
            <div className="col-2 bg-white  rounded-end-5 ">
              <Sidebar active={active} setActive={setActive} />
            </div>

            <div className="col-10 ">
              <div className="d-flex vh-100 flex-column overflow-auto">
                <Header />
                <div className="flex-grow-1 overflow-x-hidden pb-80px">
                  <div className="row">
                    <div className="col-9 ">
                      <Input
                        placeholder="search"
                        className={"w-25"}
                        onChange={(event) => {
                          if (event.target.value != "") {
                            setuserDetail({
                              ...userDetail,
                              searchTerm: event.target.value,
                              page: 1,
                            });
                          } else {
                            const { searchTerm, ...value } = userDetail;
                            setuserDetail(value);
                            setuserDetail({ ...userDetail, page: paginate });
                          }
                        }}
                      />
                    </div>

                    <div class=" col-3 d-flex gap-2 ">
                      <Button
                        buttonName="Add"
                        color="white"
                        red="danger"
                        Icon={
                          <InlineIcon icon="uil:plus" width="15" height="15" />
                        }
                      />
                      <Button
                        buttonName="Invite"
                        color="white"
                        red="danger"
                        Icon={
                          <InlineIcon
                            icon="mdi:account-multiple-plus"
                            width="15"
                            height="15"
                          />
                        }
                      />
                    </div>
                  </div>

                  <div className="table-container ">
                    <Table
                      headersName={
                        userDetail.userType == "RETAILER"
                          ? [
                              { name: "displayId", displayName: "RetailerId" },
                              {
                                name: "companyName",
                                displayName: "RetailerName",
                              },
                              { name: "address", displayName: "Location" },
                              {
                                name: "joinedDate",

                                displayName: "joinedDate",
                              },
                              {
                                name: "numberOfStoreLocations",

                                displayName: "No of Locations",
                              },
                              {
                                name: "monthlySalesSort",
                                displayName: "No of Orders",
                              },
                              {
                                name: "Actions",
                                displayName: "Actions",
                              },
                            ]
                          : [
                              {
                                name: "displayId",
                                displayName: "DistributorId",
                                sort: true,
                              },
                              {
                                name: "companyName",
                                displayName: "DistributorName",
                                sort: true,
                              },
                              {
                                name: "address",
                                displayName: "Location",
                                sort: false,
                              },
                              {
                                name: "ENVB",
                                displayName: "ERP/INV System",
                              },
                              {
                                name: "noOfMappedRetailers",
                                displayName: "Linked Retailers",
                              },
                              {
                                name: "monthlyOrders",
                                displayName: "Monthly Orders",
                              },
                              {
                                name: "monthlySales",
                                displayName: "monthlySales",
                              },
                            ]
                      }
                      data={
                        selector?.data && selector?.data?.data?.items
                          ? selector?.data?.data?.items.map((item) => ({
                              ...item,

                              joinedDate: moment(item.joinedDate).format(
                                "YYYY-MM-DD LT"
                              ),
                            }))
                          : []
                      }
                      isLoading={selector?.loading}
                      handleSort={handleSort}
                      handleClick={handleClick}
                      Icon={
                        <InlineIcon
                          icon="pajamas:remove"
                          width="15"
                          height="15"
                          style={{ color: "black" }}
                        />
                      }
                    />
                  </div>

                  <div className="card border-0">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <label>
                          Showing 1 to {userDetail.size} of{" "}
                          {selector?.data?.data?.totalCount} entries
                        </label>

                        <select
                          onChange={(event) =>
                            setuserDetail({
                              ...userDetail,
                              size: event.target.value,
                            })
                          }
                          class="form-select w-25"
                          aria-label="Default select example"
                        >
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="40">40</option>
                          <option value="50">50</option>
                        </select>
                      </div>
                      <div>
                        <ReactPaginate
                          previousLabel={"previous"}
                          nextLabel={"next"}
                          pageCount={page}
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={10}
                          containerClassName={"pagination "}
                          pageClassName={"page-item px-0"}
                          pageLinkClassName={"page-link"}
                          previousClassName={"page-item px-0"}
                          previousLinkClassName={"page-link"}
                          nextClassName={"page-item px-0"}
                          nextLinkClassName={"page-link"}
                          activeClassName={"active"}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
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
