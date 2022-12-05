import { useState } from "react";
import "./patient-profileafter.scss";
import FormInput from "../SignUp/forminput";
import patient from '../../assets/unknows.png'
import Portfolioafter from "./portfolioafter";
import { background } from "@chakra-ui/react";
const AfterPatientProfile = () => {
  const [values, setValues] = useState({
    Name: "patient name",
    patientID: "1123123",
    birthday: "",
    phonenumber: "011111",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should only include letters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z]+$",
      required: true,
    },
    {
      // patient Id
  // name
  // mobile-number
  // radiologoist
      id: 2,
      name: "",
      type: "text",
      placeholder: "patient ID",
      errorMessage: "should be a valid ID!",
      label: "patient ID",
      RegExp: "/^[0-9\b]+$/",
      required: true,
    },
    {
      id: 3,
      name: "phonenumber",
      type: "text",
      placeholder: "mobile-number",
      errorMessage: "should be a valid phone number!",
      label: "mobile number",
      RegExp: "/^[0-9\b]+$/",
      required: true,
    },
    {
      id: 4,
      name: "Radiologist",
      type: "text",
      placeholder: "radiologist",
      label: "radiologist",
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="patient-profile">

    <div className="patientprof" >

      <div className="formtosub">
      <form  onSubmit={handleSubmit}>
      <img src= {patient} alt="patientimg" className ="patientimg" />
        <h1></h1>
        {inputs.map((input) => (
          <FormInput
            
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="button" class="btn btn-dark">Update patient info</button>
        <button type="button" class="btn btn-dark">Upload a Scan</button>


      </form>
      </div>
      <div/>

      <div class = "adding" >
      <Portfolioafter />
      </div>
    </div>
    </div>
  );
};

export default AfterPatientProfile;