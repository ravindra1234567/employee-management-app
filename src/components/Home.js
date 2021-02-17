import React, { useState, useEffect } from "react";
import axios from "axios";
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
    TableCell,
    Modal,
    Backdrop,
    Fade,TablePagination
   } from "@material-ui/core";
   import { makeStyles } from "@material-ui/core/styles";
   import {Button} from "@material-ui/core"
   import EditModal from './EditModal'
   import DeleteModal from './DeleteModal'
   import ViewModal from './ViewModal'
   import AddUser from "./AddUser"
   const useStyles = makeStyles((theme) => ({
    root: {

        '& > *': {
            margin: theme.spacing(1),
          },

      maxwidth: "100vw",
    //   // height: "100vh",
      backgroundColor: theme.palette.grey[300],
      paddingTop: theme.spacing(3),
    },
    root1: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    colcell : {
        color:'white',
        fontSize:"20px"
        
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    
  }));
const Home = () => {
    const classes = useStyles();
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
    getDepartment();
  }, []);
  const [open, setOpen] = useState(false);
 

  const loadUsers = async () => {
    
    const result = await axios.get("http://localhost:9000/data");
    setUser(result.data.reverse());
  };

  const [page,setPage] = useState(0);
  const [rowsPerPage,setRowPerPage] = useState(5)
  const  onChangePage = (event,nextPage)=>{
    setPage(nextPage);
  }
   const onChangeRowsPerPage=(event)=>{
     setRowPerPage(event.target.value);
   }
   const [department1, setDepartment1] = useState([]);
    const getDepartment = async () => {
        const result = await axios.get("http://localhost:9000/department");
        console.log(result)
        setDepartment1(result.data);
      };

  return (
    <Container className={classes.root}>
        <Button style={{float:"right"}}><AddUser department1={department1}/></Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead >
            <TableRow style={{background:"black"}}>
              <TableCell className={classes.colcell}>Id</TableCell>
              <TableCell className={classes.colcell}>Name</TableCell>
              <TableCell className={classes.colcell}>E-mail</TableCell>
              <TableCell className={classes.colcell}>Address</TableCell>
              <TableCell className={classes.colcell}>Mobile</TableCell>
              <TableCell className={classes.colcell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((user,i)=>(
               <TableRow>
                 <TableCell>{i}</TableCell>
               <TableCell>{user.name}</TableCell>
               <TableCell>{user.email}</TableCell>
               <TableCell>{user.city}</TableCell>
               <TableCell>{user.mobile}</TableCell>
               <TableCell className={classes.root1} >
               <Button><ViewModal id={user.id}/></Button>
               <Button>
                   <EditModal
                        id={user.id}
                        // name = {user.name}
                        // email = {user.email}
                        // city = {user.city}
                        // mobile = {user.mobile}
                        // date = {user.date}
                        // department = {user.department}
                        // gender = {user.gender}
                        department1={department1}
                    />
               </Button>
               <Button>
                   <DeleteModal
                     id={user.id}
                     name = {user.name}
                     email = {user.email}
                    />
                </Button>
               </TableCell>
               </TableRow>
            ))}
           
            
          </TableBody>
        </Table>
        <TablePagination
        rowsPerPageOptions = {[1,2,3,4,5,10,15,25,50]}
        count = {users.length}
        rowsPerPage = {rowsPerPage}
        page = {page}
        onChangePage = {onChangePage}
        onChangeRowsPerPage ={onChangeRowsPerPage}
      />
      </TableContainer>
    </Container>
  );
};

export default Home;
