import React,{useState,useEffect} from "react";
// import "./styles/App.css";
import { 
  Container,
   Paper,
   Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,TablePagination,
 } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    maxwidth: "100vw",
    // height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(3),
  },
}));

function DataTable() {
  const classes = useStyles();
  const [users,setUsers] = useState([]);
  const [page,setPage] = useState(0);
  const [rowsPerPage,setRowPerPage] = useState(5)
  const loadUsers = async ()=>{
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(result.data);

  }

 const  onChangePage = (event,nextPage)=>{
   setPage(nextPage);
 }
  const onChangeRowsPerPage=(event)=>{
    setRowPerPage(event.target.value);
  }

  useEffect(()=>{
    loadUsers()
  },[]);
  
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead >
            <TableRow style={{fontFamily:"revert"}}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((user)=>(
               <TableRow>
                 <TableCell>{user.id}</TableCell>
               <TableCell>{user.name}</TableCell>
               <TableCell>{user.username}</TableCell>
               <TableCell>{user.email}</TableCell>
               <TableCell>{user.address.city}</TableCell>
               <TableCell>{user.phone}</TableCell>
               <TableCell>{user.website}</TableCell>
               <TableCell>{user.company.name}</TableCell>
               </TableRow>
            ))}
           
            
          </TableBody>
        </Table>
        <TablePagination
        rowsPerPageOptions = {[5,10,15,25,50]}
        count = {users.length}
        rowsPerPage = {rowsPerPage}
        page = {page}
        onChangePage = {onChangePage}
        onChangeRowsPerPage ={onChangeRowsPerPage}
      />
      </TableContainer>
    </Container>
  );
}

export default DataTable;