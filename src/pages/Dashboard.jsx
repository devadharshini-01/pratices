import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import { data } from "../Json";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Model from "../component/custom/Model";
import Table from "../component/custom/Table";

const Dashboard = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const handleClose = () => setShow(false);
  const [deleteData, setDeleteData] = useState(null);
  const [items, setItems] = useState(data.data.items);

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

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-2">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="col-10">
          <div className="card mt-5">
            <Table
              headersName={[
                "displayId",
                "companyName",
                "phoneNumber",
                "address",
                "Actions",
              ]}
              data={items}
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
