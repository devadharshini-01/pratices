import { useFormik } from "formik";
import { Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../component/custom/Button";
import logo from "../../images/logo.PNG";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { DistributorData, RetailerData } from "../../Constant";

const initialValues = {
  username: "",
  password: "",
};
const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password  required"),
});
const loginCredential = ["Admin", "Distributor", "Retailer"];
const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (values, event) => {
    console.log(values);

    if (
      loginCredential.includes(values.username) &&
      values.password === "Test@1234"
    ) {
      localStorage.setItem("userType", values.username);
      navigate("/dashboard")
    } else {
      toast.error("Incorrect username or password");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <div className="card size p-3 mx-auto mt-5">
          <img className="w-25 mx-auto" src={logo}></img>

          <h4 className="text-center">Sign with your email address</h4>
          <div>
            <label for="exampleFormControlInput1" class="form-label">
              User name
            </label>
            <input
              type="username"
              className="form-control input-color"
              id="exampleFormControlInput1"
              placeholder="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <p className="text-danger">{formik.errors.username}</p>
            <label for="password1" className="form-label ">
              Password
            </label>
            <input
              type="email"
              class="form-control input-color"
              id="password1"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <p className="text-danger">{formik.errors.password}</p>
            <div className="row">
              <div className="col-7">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Keep me signed in
                  </label>
                </div>
              </div>
              <div className="col-5 text-end">
                <label>Forget Password?</label>
              </div>
            </div>
            {/* <div>
              <p className="mx-auto">Don't have an account?<span onClick={()=>navigate("/Signin")}>sign up</span></p>
            </div> */}
            <Button
              type="submit"
              buttonName="Signin"
              className={"w-100 bg-color"}
              red="white"
            />

            <p className="text-center mt-2 ">Privacy policy</p>
          </div>
        </div>
        <ToastContainer />
      </>
    </form>
  );
};
export default Login;
