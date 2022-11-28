import axios from "axios";
import React from "react";

const data = {name, mobile_number, national_id, radiologist};
const getCustomersData = () => {
    axios
    .get("https://localhost:8000/patients/")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };
   getCustomersData();

