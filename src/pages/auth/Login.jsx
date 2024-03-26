import { useFormik } from "formik";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password  required"),
});


const Login = () => {
     const handleFormSubmit=(values)=>{
   console.log(values,"vvv");
     }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
     handleFormSubmit(values);
    },
  });
console.log(formik,"formik");
const navigate=useNavigate();
  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <div className="card w-25 p-3 mx-auto mt-5">
          <div>
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <p className="text-danger">{formik.errors.email}</p>
            <label for="password1" class="form-label">
              Password
            </label>
            <input
              type="email"
              class="form-control"
              id="password1"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <p className="text-danger">{formik.errors.password}</p>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <label>Forget Password?</label>
              </div>
            </div>
            <div>
              <p className="mx-auto">Don't have an account?<span onClick={()=>navigate("/Signin")}>sign up</span></p>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            
            
          </div>
        </div>
      </>
    </form>
  );
};
export default Login;
