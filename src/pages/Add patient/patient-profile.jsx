import { useState } from "react";
import "./patient-profile.scss";
import FormInput from "../SignUp/forminput";
import patient from '../../assets/patient.jpg'
import Portfolio from "../patients/portfolio";
const PatientProf = () => {
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
      id: 2,
      name: "patientID",
      type: "text",
      placeholder: "patient ID",
      errorMessage: "should be a valid ID!",
      label: "patientID",
      RegExp: "/^[0-9\b]+$/",
      required: true,
    },
    {
      id: 3,
      name: "phonenumber",
      type: "text",
      placeholder: "phone number",
      errorMessage: "should be a valid phone number!",
      label: "phone number",
      RegExp: "/^[0-9\b]+$/",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
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
    <div className="patientprof" id= "patientprof">
      
      <form onSubmit={handleSubmit}>
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
        <button>Updata patient info</button>

      </form>
      <div class = "adding" >
      <Portfolio />
      </div>
    </div>
    </div>
  );
};

export default PatientProf;