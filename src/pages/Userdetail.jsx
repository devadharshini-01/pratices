import Sidebar from "../component/custom/Sidebar";
import Header from "../component/custom/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../component/custom/Button";
import Input from "../component/custom/Input";
import { InlineIcon } from "@iconify/react";

const validationSchema = yup.object().shape({
  userId: yup.string().required("required"),
  emailId: yup.string().required("required"),
  displayId: yup.string().required("required"),
  status: yup.string().required("required"),
  userType: yup.string().required("required"),
  profileId: yup.string().required("required"),
  companyName: yup.string().required("required"),
  phoneNumber: yup.string().required("required"),
  website: yup.string().required("required"),
  primaryContactName: yup.string().required("required"),
  address: yup.string().required("required"),
  activationKey: yup.string().required("required"),
  posProvider: yup.string().required("required"),
  websiteProvider: yup.string().required("required"),
  licenceNumber: yup.string().required("required"),
  licenceType: yup.string().required("required"),
  ipAddress: yup.string().required("required"),
  inventoryManagementSystem: yup.string().required("required"),
  additionalOrderFulfillmentSoftware: yup.string().required("required"),
  minimumOrderThresholds: yup.string().required("required"),
  numberOfStoreLocations: yup.string().required("required"),
  orderCutOffTime: yup.string().required("required"),
  monthlySalesSort: yup.string().required("required"),
  monthlyOrders: yup.string().required("required"),
  noOfOrders: yup.string().required("required"),
  noOfMappedRetailers: yup.string().required("required"),
  monthlySales: yup.string().required("required"),
  joinedDate: yup.string().required("required"),
});

const Userdetail = () => {
  const location = useLocation();
  const initialVal = location?.state.DD;
  const returnPath = localStorage.getItem("ReturnPath");
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const [updatedValue, setUpdatedValues] = useState(initialVal);

  const handleFormSubmit = (values) => {
    setUpdatedValues(values);

    setEdit(false);
  };

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <div className="row">
          <div className="col-2 bg-white rounded-end-5 sidebor">
            <Sidebar />
          </div>
          <div className="col-10">
            <Header />
            <div className="row">
              <div className="col-9">
                <Button
                  type="button"
                  buttonName="Back"
                  color="white"
                  onClick={() => navigate(returnPath)}
                />
              </div>

              <div className="col-3">
                <Button
                  type="button"
                  onClick={() => setEdit(!edit)}
                  color="white"
                  buttonName={edit ? "cancel" : "edit"}
                  Icon={<InlineIcon icon="mage:edit" width="15" height="15" />}
                />
              </div>
            </div>
            <div className="card mt-2 border-0 ">
              <nav className="nav nav-pills nav-fill p-3">
                <a class="nav-link  red-color" aria-current="page" href="#">
                  Details
                </a>
                <a class="nav-link red-color" href="#">
                  Orders
                </a>
                <a class="nav-link red-color" href="#">
                  Payment Fees
                </a>
                <a class="nav-link red-color" href="#">
                  Retailers
                </a>
                <a class="nav-link red-color" href="#">
                  Settings
                </a>
              </nav>
            </div>

            <div className="card border-0 p-3 mt-5">
              <div className="row">
                <div className="col-4">
                  <b>UserID</b>
                  {edit ? (
                    <Input
                      name="userId"
                      value={formik.values.userId}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.userId}</p>
                  )}
                  <p className="text-danger">{formik.errors.userId}</p>
                  <b>Status</b>

                  {edit ? (
                    <Input
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.status}</p>
                  )}
                  <p className="text-danger">{formik.errors.status}</p>
                  <b>ProfileId</b>

                  {edit ? (
                    <Input
                      name="profileId"
                      value={formik.values.profileId}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.profileId}</p>
                  )}
                  <p className="text-danger">{formik.errors.profileId}</p>
                  <b>Website</b>

                  {edit ? (
                    <Input
                      name="website"
                      value={formik.values.website}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.website}</p>
                  )}
                  <p className="text-danger">{formik.errors.website}</p>
                  <b>ActivationKey</b>

                  {edit ? (
                    <Input
                      name="activationKey"
                      value={formik.values.activationKey}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.activationKey}</p>
                  )}
                  <p className="text-danger">{formik.errors.activationKey}</p>
                  <b>LicenceManagementSystem</b>

                  {edit ? (
                    <Input
                      name="licenceNumber"
                      value={formik.values.licenceNumber}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.licenceNumber}</p>
                  )}
                  <p className="text-danger">{formik.errors.licenceNumber}</p>
                  <b>InventoryManagementSystem</b>

                  {edit ? (
                    <Input
                      name="inventoryManagementSystem"
                      value={formik.values.inventoryManagementSystem}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.inventoryManagementSystem}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.inventoryManagementSystem}
                  </p>
                  <b>Monthlyorders</b>

                  {edit ? (
                    <Input
                      name="monthlyOrders"
                      value={formik.values.monthlyOrders}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.monthlyOrders}</p>
                  )}
                  <p className="text-danger">{formik.errors.monthlyOrders}</p>
                  <b>Nooforders</b>

                  {edit ? (
                    <Input
                      name="noofOrders"
                      value={formik.values.noOfOrders}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.noOfOrders}</p>
                  )}
                  <p className="text-danger">{formik.errors.noOfOrders}</p>
                  <b>Ordercutofftime</b>

                  {edit ? (
                    <Input
                      name="orderCutOffTime"
                      value={formik.values.orderCutOffTime}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.orderCutOffTime}</p>
                  )}
                  <p className="text-danger">{formik.errors.orderCutOffTime}</p>
                  <b>MonthlySalessort</b>

                  {edit ? (
                    <Input
                      name="monthlyOrders"
                      value={formik.values.monthlyOrders}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.monthlySalesSort}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.monthlySalesSort}
                  </p>
                </div>
                <div className="col-4">
                  <b>EmailId</b>

                  {edit ? (
                    <Input
                      name="emailId"
                      value={formik.values.emailId}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.emailId}</p>
                  )}
                  <p className="text-danger">{formik.errors.emailId}</p>
                  <b>Usertype</b>

                  {edit ? (
                    <Input
                      name="userType"
                      value={formik.values.userType}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.userType}</p>
                  )}
                  <p className="text-danger">{formik.errors.userType}</p>
                  <b>Companyname</b>

                  {edit ? (
                    <Input
                      name="companyName"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.companyName}</p>
                  )}
                  <p className="text-danger">{formik.errors.companyName}</p>
                  <b>Primarycontactname</b>

                  {edit ? (
                    <Input
                      name="primaryContactName"
                      value={formik.values.primaryContactName}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.primaryContactName}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.primaryContactName}
                  </p>
                  <b>Posprvider</b>

                  {edit ? (
                    <Input
                      name="posProvider"
                      value={formik.values.posProvider}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.posProvider}</p>
                  )}
                  <p className="text-danger">{formik.errors.posProvider}</p>
                  <b>Licencetype</b>

                  {edit ? (
                    <Input
                      name="licenceType"
                      value={formik.values.licenceType}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.licenceType}</p>
                  )}
                  <p className="text-danger">{formik.errors.licenceType}</p>
                  <b>AdditionalOrderFulfillmentSoftware</b>

                  {edit ? (
                    <Input
                      name="additionalOrderFulfillmentSoftware"
                      value={formik.values.additionalOrderFulfillmentSoftware}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.additionalOrderFulfillmentSoftware}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.additionalOrderFulfillmentSoftware}
                  </p>
                  <b>MinimumOrderThresholds</b>

                  {edit ? (
                    <Input
                      name="minimumOrderThresholds"
                      value={formik.values.minimumOrderThresholds}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.minimumOrderThresholds}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.minimumOrderThresholds}
                  </p>
                  <b>NumberOfStoreLocations</b>

                  {edit ? (
                    <Input
                      name="numberOfStoreLocations"
                      value={formik.values.numberOfStoreLocations}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.numberOfStoreLocations}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.numberOfStoreLocations}
                  </p>
                </div>
                <div className="col-4">
                  <b>DisplayId</b>

                  {edit ? (
                    <Input
                      name="displayId"
                      value={formik.values.displayId}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.displayId}</p>
                  )}
                  <p className="text-danger">{formik.errors.displayId}</p>
                  <b>Joineddate</b>

                  {edit ? (
                    <Input
                      name="joinedDate"
                      value={formik.values.joinedDate}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.joinedDate}</p>
                  )}
                  <p className="text-danger">{formik.errors.joinedDate}</p>
                  <b>Phonenumber</b>

                  {edit ? (
                    <Input
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.phoneNumber}</p>
                  )}
                  <p className="text-danger">{formik.errors.phoneNumber}</p>
                  <b>Address</b>

                  {edit ? (
                    <Input
                      name="joinedDate"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.address}</p>
                  )}
                  <p className="text-danger">{formik.errors.address}</p>
                  <b>websiteProvider</b>

                  {edit ? (
                    <Input
                      name="websiteProvider"
                      value={formik.values.websiteProvider}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.websiteProvider}</p>
                  )}
                  <p className="text-danger">{formik.errors.websiteProvider}</p>
                  <b>IpAddress</b>

                  {edit ? (
                    <Input
                      name="ipAddress"
                      value={formik.values.ipAddress}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.ipAddress}</p>
                  )}
                  <p className="text-danger">{formik.errors.ipAddress}</p>
                  <b>NoOfMappedRetailers</b>

                  {edit ? (
                    <Input
                      name="noOfMappedRetailers"
                      value={formik.values.noOfMappedRetailers}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.noOfMappedRetailers}</p>
                  )}
                  <p className="text-danger">
                    {formik.errors.noOfMappedRetailers}
                  </p>
                  <b>Monthlysales</b>

                  {edit ? (
                    <Input
                      name="monthlySales"
                      value={formik.values.monthlySales}
                      onChange={formik.handleChange}
                    />
                  ) : (
                    <p>{updatedValue?.monthlySales}</p>
                  )}
                  <p className="text-danger">{formik.errors.monthlySales}</p>
                </div>
              </div>

              {edit && (
                <div className="gap-2 d-flex justify-content-sm-end ">
                  <button type="submit" className="btn btn-primary mb-4 m-4">
                    update
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </form>
  );
};
export default Userdetail;
