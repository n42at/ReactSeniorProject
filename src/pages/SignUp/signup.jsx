import { useState } from "react";
import "./signup.scss";
import FormInput from "./forminput";
import Axios from "axios";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";



const Signup = () => {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[mobile_number, setMobile] = useState("");
  const[national_id, setID] = useState("");
  const[password, setPassword] = useState("");
  let navigate = useNavigate(); 

  const routeChange = () => {
    let path = `./main`;
    navigate(path);
  };

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
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a valid email address!",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "mobile_number",
      type: "text",
      placeholder: "mobile_number",
      label: "mobile_number",
    },
    {
      id: 4,
      name: "national_id",
      type: "text",
      placeholder: "national_id",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "national_id",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "Passwords don't match!",
      label: "password",
      pattern: values.password,
      required: true,
    },
  ];


  /*Axios.post("http://localhost:8000/profiles/", {
    name: name,
    email: email,
    mobile_number: mobile_number,
    national_id: national_id,
    password: password,
  }).then(() => {
    console.log("success");
  }); */


  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      name,
      email,
      mobile_number,
      national_id,
      password,
    };

   /* fetch("http://localhost:8000/profiles/", {
      mode: "no-cors",
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: {
      "name": "abdulrahman",
      "email": "a@a",
      "mobile_number": "123456789",
      "national_id": "123123",
      "password": "asd",
      }
      }).then(() => {
       
        console.log("new user added");

      }).catch(() => console.log("error")); */
  
  fetch("127.0.0.1:8000/profiles/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"},
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new radiologist added");
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="signup" id= "signup">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        
        <button onClick={routeChange}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;