import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid'
import { useState, useEffect } from 'react'


const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'mobile_number', headerName: 'Mobile Number', width: 400 },
    { field: 'national_id', headerName: 'National id', width: 600 }, // gonna be removed
    //{ field: 'radiologist', headerName: 'radiologist', width: 400 },

  ]
  const List = () => {

    const [tableData, setTableData] = useState([])
  
    const [rows, setRows] = useState(tableData);
    //const [deletedRows, setDeletedRows] = useState([]);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/patients/")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])

    //im here, look at the github code 

// class List extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:[]
//         };
//     }

    
//     fetchData(){
//         fetch('http://127.0.0.1:8000/patients/')
//         .then(response=>response.json())
//         .then((data)=>{
//             this.setState({
//                 data:data
//             });
//         });
//     }

//     componentDidMount(){
//         this.fetchData();
//     }


//     // deleteData(id){
//     //     fetch('http://127.0.0.1:8000/employee/'+id+'/',{
//     //         method:'DELETE',
//     //         body:JSON.stringify(this.state),
//     //     })
//     //     .then(response=>response)
//     //     .then((data)=>{
//     //         if(data){
//     //             this.fetchData();
//     //         }
//     //     });
//     // }

//     render(){
//         const empData=this.state.data;
//         const rows=empData.map((emp)=>
//             <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.mobile_number}</td>
//                 <td>{emp.national_id}</td>
//                 <td>{emp.radiologist}</td>
//                 <td>
//                     <Link to={'update/'+emp.id} className="btn btn-info mr-2">Update</Link>
//                     <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
//                 </td>
//             </tr>
//         );
//         return (
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>mobile</th>
//                         <th>national_id</th>
//                         <th>radiologistid</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </table>
//         );
//     }
    
// }


// class List extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:[]
//         };
//     }

    
//     fetchData(){
//         fetch('http://127.0.0.1:8000/patients/')
//         .then(response=>response.json())
//         .then((data)=>{
//             this.setState({
//                 data:data
//             });
//         });
//     }

//     componentDidMount(){
//         this.fetchData();
//     }


    // deleteData(id){
    //     fetch('http://127.0.0.1:8000/employee/'+id+'/',{
    //         method:'DELETE',
    //         body:JSON.stringify(this.state),
    //     })
    //     .then(response=>response)
    //     .then((data)=>{
    //         if(data){
    //             this.fetchData();
    //         }
    //     });
    // }

        return (
            <div style={{ height: 700, width: '100%' }}>
              <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={12}
                checkboxSelection
                onSelectionModelChange={({ selectionModel }) => {
                  const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
                  const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
                  setDeletedRows(rowsToDelete);
                  console.log(deletedRows);
                }}
              />
            </div>
          )
        }
  

export default List;