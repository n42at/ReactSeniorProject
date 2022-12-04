import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadTable from './ReadTable';
import './Tables.scss';

const Table = () => {
  const [patients, setpatients] = useState([]);
  const [addpatient, setaddpatinet] = useState({name: '', mobile_number: '',national_id: '',radiologist_id: ''});

  const handleChange = (input) => (e) => {
    e.preventDefault()
    console.log(addpatient);
    setaddpatinet({ ...addpatient, [input]: e.target.value });
  }

  const handleaddpatient = (e) => {
    e.preventDefault();
    console.log(addpatient);
    axios.post('http://localhost:8000/patients/', addpatient)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
      
  const fetchUrl = "http://127.0.0.1:8000/patients/"
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl)
      setpatients(data.data)
      console.log(data.data);
      return data
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div>
      <div className="d-flex flex-row">
        
      </div>
      <div className='table-responsive1'>
      <table className='table table-bordered table-dark'>
        <thead>
        
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>name</th>
            <th scope='col'>mobile</th>
            <th scope='col'>national id</th>
            <th scope='col'>radiologist id</th>
            <th scope='col'>action</th>
          </tr>
        </thead>
        <tbody>
          
          <ReadTable patients={patients} />
        </tbody>
        

      </table>
      
      <button  type="button" className="me-3 btn btn-primary ml-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#addModalForm">
          Add patient +
        </button>

        
      </div>
      
      

       {/*Add Modal */}
       <div className="modal fade" id="addModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New Patient</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleaddpatient}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange("name")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">mobile number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile_number"
                    placeholder="Mobile number"
                    required
                    onChange={handleChange("mobile_number")}
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">National ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="national_id"
                    placeholder="National ID"
                    required
                    onChange={handleChange("national_id")}
                  input/>
                </div>
                <div className="mb-3">
                  <label className="form-label">radiologist</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile_number"
                    placeholder="radiologist"
                    required
                    onChange={handleChange("radiologist")}
                  />
                </div>
                
                <div className="modal-footer d-block">
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-warning float-end">Add Patient</button>
                </div>
              </form>
              
            </div>
            
          </div>
          
        </div>
      </div>
      

      {/*Edit Modal */}
      <div className="modal fade" id="editModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Patient info</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleaddpatient}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange("name")}

                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">mobile number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile_number"
                    placeholder="Mobile number"
                    required
                    onChange={handleChange("mobile_number")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">radiologist id</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile_number"
                    placeholder="radiologist"
                    required
                    onChange={handleChange("radiologist")}
                  />
                </div>



                

                
                <div className="mb-3">
                  <label className="form-label">National ID</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="national_id"
                    placeholder="National ID"
                    required
                    onChange={handleChange("national_id")}
                  ></textarea>
                </div>
                <div className="modal-footer d-block">
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-success float-end">Save</button>
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-danger float-start"> Delete Patient</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/*show patients info*/}
      <div className="modal fade" id="showModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLabel">Add New Patient</h5>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
             <form onSubmit={handleaddpatient}>
               <div className="mb-3">
                 <label className="form-label">Name</label>
                 <input
                   type="text"
                   className="form-control"
                   name="name"
                   placeholder="Name"
                   required
                   onChange={handleChange("name")}
                 />
               </div>
               <div className="mb-3">
                 <label className="form-label">mobile number</label>
                 <input
                   type="text"
                   className="form-control"
                   name="mobile_number"
                   placeholder="Mobile number"
                   required
                   onChange={handleChange("mobile_number")}
                 />
               </div>
               
               <div className="mb-3">
                 <label className="form-label">National ID</label>
                 <input
                   type="text"
                   className="form-control"
                   name="national_id"
                   placeholder="National ID"
                   required
                   onChange={handleChange("national_id")}
                 input/>
               </div>
               <div className="mb-3">
                 <label className="form-label">radiologist</label>
                 <input
                   type="text"
                   className="form-control"
                   name="mobile_number"
                   placeholder="radiologist"
                   required
                   onChange={handleChange("radiologist")}
                 />
               </div>
               
               <div className="modal-footer d-block">
                 <button type="submit" data-bs-dismiss="modal" className="btn btn-warning float-end">Add Patient</button>
               </div>
             </form>
             
           </div>
           
         </div>
         
       </div>
     </div>




    </div>



  )
}

export default Table;