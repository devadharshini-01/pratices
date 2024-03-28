import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import { data } from "../Json";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Model from "../component/custom/Model";
import Table from "../component/custom/Table";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { DashboardApiAction } from "../Redux/Action/DashboardApiAction";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";

const Dashboard = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    userType: "RETAILER",
    sortBy: "joinedDate:DESC",       
    page: 1,
    size: 10,
    });
  const location = useLocation();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.dashboard.constantgetapi);
  const handleClose = () => setShow(false);

  const [deleteData, setDeleteData] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (location.state && location.state.updatedValue) {
      const state = location.state.updatedValue;

      setItems(
        items.map((item) => (item.userId === state.userId ? state : item))
      );
      setItems();
    }
  }, [location.state]);

  const handleClick = (item) => {
    navigate("/userdetail", { state: { item } });
  };

  const handleDeleteClick = (event, item) => {
    event.stopPropagation();
    setShow(true);
    setDeleteData(item);
  };

  const handleDelete = () => {
    const updatedItems = items.filter(
      (item) => item.userId !== deleteData.userId
    );

    setItems(updatedItems);
    setShow(false);
  };
  useEffect(() => {
    dispatch(DashboardApiAction());
  }, []);

  // useEffect(() => {
  //   dispatch(UsersListApiAction(userData));
  // }, []);

  return (
    <>
    
      <Header />
      <div className="row">
        <div className="col-2 sidebor">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="col-10">
          <div className="card mt-5">
            <Table
              headersName={[
                // "displayId",
                // "companyName",
                // "phoneNumber",
                // "address",
                // "Actions",
                "title",
                "price",
                "description",
                "Actions",
              ]}
              data={store.data}
              // data={items}
              handleClick={handleClick}
              handleDeleteClick={handleDeleteClick}
              Icon={
                <Icon
                  icon="pajamas:remove"
                  width="20"
                  height="20"
                  style={{ color: "black" }}
                />
              }
            />
          </div>
        </div>

        <Model
          show={show}
          handleClose={handleClose}
          title={"Delete Model"}
          body={
            <p>
              Are you sure you want to delete {`${deleteData?.companyName}`}?
            </p>
          }
          button2Color={"bg-black"}
          button1Value={"Delete"}
          // button2Value={"cancel"}
          button1Color={"bg-danger"}
          button2Click={handleClose}
          button1Click={handleDelete}
        />
      </div>
    </>
  );
};
export default Dashboard;
