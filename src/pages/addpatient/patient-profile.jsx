import { useState } from "react";
import "./patient-profile.scss";
import FormInput from "../SignUp/forminput";
import patient from '../../assets/patient.jpg'
import Portfolio from "./portfolio";
const PatientProf = () => {
  const[name, setName] = useState("");
  const[mobile_number, setEmail] = useState("");
  const[national_id, setMobile] = useState("");
  const[radiologist, setID] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile_number: "",
    national_id: "",
    password: "",
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
      id: 2,
      name: "mobile number",
      type: "text",
      placeholder: "mobile number",
      errorMessage: "should be a valid ID!",
      label: "mobile number",
      RegExp: "/^[0-9\b]+$/",
      required: true,
    },
    
    {
      id: 3,
      name: "national_id",
      type: "text",
      placeholder: "national_id",
      label: "national_id",
      required: true,
    },
    {
      id: 4,
      name: "radiologist",
      type: "text",
      placeholder: "radiologist",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "radiologist",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      name,
      mobile_number,
      national_id,
      radiologist,
    };

    fetch("127.0.0.1:8000/patients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify(post),
      }).then(() => {
        console.log("new patient added");
      });
    };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  
  return (
    <div className="patient-profile">
    <div className="patientprof" id= "patientprof">
      
      <form onSubmit={handleSubmit}>
      <img src= {patient} alt="patientimg" className ="patientimg" />
        <h1>patient details</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Add Patient</button>

      </form>
      <div class = "adding" >
      <Portfolio />
      </div>
    </div>
    </div>
  );
};

export default PatientProf;