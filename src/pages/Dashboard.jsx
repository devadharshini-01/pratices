import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import Model from "../component/custom/Model";
import Table from "../component/custom/Table";
import { DashboardApiAction } from "../Redux/Action/DashboardApiAction";

const Dashboard = ({ active, setActive }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  let store = useSelector((state) => state.dashboard.constantgetapi);
  const [show, setShow] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  // const [items, setItems] = useState(store.data);

  const handleClose = () => setShow(false);

  const handleClick = (DD) => {
    navigate("/userdetail", { state: { DD } });
  };

  const handleDeleteClick = (event, item) => {
    event.stopPropagation();
    setShow(true);
    setDeleteData(item);
  };

  const handleDelete = () => {
    store.data = store.data.filter((value) => value.id !== deleteData.id);
    setShow(false);
  };

  useEffect(() => {
    if (location.state && location.state.updatedValue) {
      const state = location.state.updatedValue;
      store.data = store.data((prev) =>
        prev.userId === state.userId ? state : prev
      );
    }
  }, [location.state]);

  useEffect(() => {
    dispatch(DashboardApiAction());
  }, []);
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
              headersName={["title", "price", "description", "Actions"]}
              data={store?.data}
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
              isLoading={store?.loading}
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
          button1Color={"bg-danger"}
          button2Click={handleClose}
          button1Click={handleDelete}
        />
      </div>
    </>
  );
};
export default Dashboard;
