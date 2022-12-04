import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PatientsTable2 = () => {
  const [patients,setpatients] = useState([]);
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
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>name</th>
                        <th scope='col'>mobile</th>
                        <th scope='col'>national id</th>
                        <th scope='col'>action</th>
                    </tr>
                </thead>
                <tbody>
                  {patients.map((patient => 
                    <tr key={patient.id}>
                      <td>{patient.id}</td>
                      <td>{patient.name}</td>
                      <td>{patient.mobile_number}</td>
                      <td>{patient.national_id}</td>
                    <td>
                        <button>edit</button>
                        <button>delete</button>
                    </td>
                  </tr>
                  ))}
                </tbody>
                

            </table>
        </div>
    )
}

export default PatientsTable2;