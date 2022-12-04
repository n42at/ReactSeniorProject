import { blog } from "fontawesome";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./create.scss";
const Create = () => {
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `./main`; 
    navigate(path);
  }

  const handleRender = () => {
    setTimeout(() => {
       this.setState({ render : !this.state.render })
    }, 1000);
  }

  const toComponentB=()=>{
    navigate('./main',{state:blog});
      }
    
     
        
      

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[mobile_number, setMobile] = useState("");
    const[national_id, setID] = useState("");
    const[password, setPassword] = useState("");

  //const handleSubmit = (e) => {
    //e.preventDefault();
    //const blog = { name, email, mobile_number,national_id,password};
    
    const handleSubmit = (e) => {
      const blog = { name, email, mobile_number,national_id,password};

      e.preventDefault();
      fetch('http://localhost:8000/profiles/', {
         method: 'POST',
         body: JSON.stringify(blog),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => res.json())
         .then((post) => {
            setName('');
            setEmail('');
            setMobile('');
            setID('');
            setPassword('');
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

    //const options={
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // cache: 'no-cache',
      //   method: 'POST',
      //   headers: {
      //     'Allow': 'GET, POST, HEAD',
      //     'Accept': 'application/x-www-form-urlencoded; charset=UTF-8, text/plain, */*', 
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      //     'Access-Control-Allow-Methods': '*',
      //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
          
      //   body : JSON.stringify(blog)
      // } 

      
      // fetch('http://localhost:8000/profiles/', options)
      // .then(() => {
      //   console.log('new radiologist added');
      // }).catch(error => {
      //     // handle the error here
      //     console.log(e);

    //  const options={
    // mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache',
    //   method: 'POST',
    //   headers: {
    //     'Allow': 'GET, POST, HEAD',
    //     'Accept': 'application/x-www-form-urlencoded; charset=UTF-8, text/plain, */*', 
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    //     'Access-Control-Allow-Methods': '*',
    //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        
    //   body : JSON.stringify(blog)
    // } 
    
    // fetch('http://localhost:8000/profiles/', options)
    // .then(() => {
    //   console.log('new radiologist added');
    // }).catch(error => {
    //     // handle the error here
    //     console.log(e);
    // });

    
  

  return (
    
    <div className="creating">
      
      <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
        <label>name:</label>
        <input 
          type= "text"
          required
          value={name}

          onChange={(e) => setName(e.target.value)}
        />
        <label>email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>mobile_number:</label>
        <input 
          type="text" 
          required 
          value={mobile_number}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label> national id </label>
        <input 
          type="text" 
          required 
          value={national_id}
          onChange={(e) => setID(e.target.value)}
        />
        <label> password </label>
        <input 
          type="password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={routeChange} > Sign up</button>
      </form>
    </div>
  );
}
 
export default Create;