import {  useFormik } from "formik";
import { Card } from "react-bootstrap";
import * as yup from "yup";


const initialValues={
    name:"",
    email:"",
    phonenumber:"",
    addressdetails:"",
    radio: "",
    course:"",
    state:"",
}
const validationSchema=yup.object().shape({
    name:yup.string().required(" name is required"),
    email:yup.string().email().required("email is required"),
    phonenumber:yup.string().required("phonenumber is required"),
    addressdetails:yup.string().required("addressdetail is required"),
   radio:yup.string().required("required"),
   
    course:yup.string().required("course is required"),
    state:yup.string().required("state is required"),
})

const Signin =()=>{
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
return(
    <form onSubmit={formik.handleSubmit}>
        <>
<div className="card w-75 mx-auto mt-5 p-3">
<div className="row">
    <div className="col-4">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  name="name"
  value={formik.values.name}
  onChange={formik.handleChange}
  />
  <p className="text-danger">{formik.errors.name}</p>
    </div>
 <div className="col-4">

 <label for="Email" class="form-label">Email</label>
  <input type="number" class="form-control" id="Email" 
    name="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    />
    <p className="text-danger">{formik.errors.email}</p>
 </div>
<div className="col-4">
<label for="Phonenumber" class="form-label">Phonenumber</label>
  <input type="number" class="form-control" id="Phonenumber" 
    name="phonenumber"
    value={formik.values.phonenumber}
    onChange={formik.handleChange}
  />
  <p className="text-danger">{formik.errors.phonenumber}</p>
</div>


 
</div>
<label>Address details</label>
<div class="form-floating">
  <textarea className="form-control w-50" id="floatingTextarea"
    name="addressdetails"
    value={formik.values.addressdetails}
    onChange={formik.handleChange}>
    </textarea>
 
</div>
<p className="text-danger">{formik.errors.addressdetails}</p>
<label>Are you willing?</label>

<div class="form-check">
  <input class="form-check-input" type="radio"  id="flexRadioDefault1"
  name="radio"
  value={"yes"}
  onChange={formik.handleChange}

/>

  <label class="form-check-label" for="flexRadioDefault1">
    Yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" id="flexRadioDefault2"
    name="radio"
    value={"No"}
    onChange={formik.handleChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
<p className="text-danger">{formik.errors.radio}</p>
<label>Course</label>
<div class="form-check">

  <input class="form-check-input" type="checkbox"  id="defaultCheck1"
    name="course"
    value={"java"}
    onChange={formik.handleChange}/>
  <label class="form-check-label" for="defaultCheck1">
    Java
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="defaultCheck1"
    name="course"
    value={"react"}
    onChange={formik.handleChange}
  />
  <label class="form-check-label" for="defaultCheck1">
  React
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="defaultCheck1"
    name="course"
    value={"Html"}
    onChange={formik.handleChange}/>
  <label class="form-check-label" for="defaultCheck1">
  Html
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="defaultCheck1"
    name="course"
    value={"bootstrap"}
    onChange={formik.handleChange}
    />
  <label class="form-check-label" for="defaultCheck1">
  Bootstrap
  </label>
</div>
<p className="text-danger">{formik.errors.course}</p>
<label>State</label>
<select className="form-select w-50" aria-label="Default select example"
  name="state"
  value={formik.values.state}
  onChange={formik.handleChange}>
  <option selected>State</option>
  <option value="1">TamilNadu</option>
  <option value="2">Bihar</option>
  <option value="3">Gujarat</option>
</select>
<p className="text-danger">{formik.errors.state}</p>
<div className="   gap-2 d-flex justify-content-sm-end ">
                          <button
                            className="  btn p-2 me-md-2 bg-white btn-outline-dark"
                           
                        
                          >
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-primary">submit</button>
                        </div>
</div>

        </>
        </form>
    )
}
export default Signin;