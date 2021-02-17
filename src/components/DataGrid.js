import  React,{useState,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  randomCreatedDate,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';
import axios from 'axios';


export default function ComparatorSortingGrid() {
    const [users,setUsers] = useState([]);


    const loadUsers = async ()=>{
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(result.data)
        setUsers(result.data);
    
      }

      useEffect(()=>{
        loadUsers()
      },[]);

      const columns = [
        { field: 'id', type: 'number', width:100 },
        { field: 'name', width:200},
        {field: 'username', width:200},
        { field: 'email', width:200},
        { field: 'phone', width:200 },
        { field: 'website', width:200 },
      ];
      
      const rows = users;
      
      const sortModel = [
        {
          field: 'username',
          sort: 'asc',
        },
        {
            field: 'email',
            sort: 'asc',
          },
      ];
      

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid sortModel={sortModel} rows={rows} columns={columns} />
    </div>
  );
}
