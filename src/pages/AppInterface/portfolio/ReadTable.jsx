import React from 'react'

const ReadTable = ({ patient, handleEditPostForm, patients }) => {

  console.log(patients);
  return (
    <>
      {patients.map((patient) => (
        <tr key={patient.id}>
        <td>{patient.id}</td>
        <td>{patient.name}</td>
        <td>{patient.mobile_number}</td>
        <td>{patient.national_id}</td>
        <td>{patient.radiologist}</td>
          <td>
            <button
              type="button"
              className=" btn btn-primary ml-auto d-block mb-2"
              data-bs-toggle="modal"
              data-bs-target="#editModalForm"
              onClick={(e) => handleEditPostForm(e, patient)}
            >
              Edit
            </button>
          </td>
        </tr>

      ))}

    </>
  )
}

export default ReadTable