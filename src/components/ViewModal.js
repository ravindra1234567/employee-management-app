import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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

export default function TransitionsModal({id}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    console.log("hi")
    const result = await axios.get(`http://localhost:9000/data/${id}`);
    console.log(result.data);
    setUser(result.data);
  };

  const handleOpen = () => {
    setOpen(true);
    loadUser();
  };

  const handleClose = () => {
    setOpen(false);
  };
  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>

      <Button variant="contained" size="median" color="primary" onClick={handleOpen} className={classes.button}>View</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">User Details</h2>
            <div id="transition-modal-description">
                <h4  style={{display:'inline'}}>Name  :  </h4> <span>{user.name}</span><br/>
                <h4  style={{display:'inline'}}>Email  :  </h4> <span>{user.email}</span><br/>
                <h4  style={{display:'inline'}}>Mobile  :  </h4> <span>{user.mobile}</span><br/>
                <h4  style={{display:'inline'}}>City :  </h4> <span>{user.city}</span><br/>
                <h4  style={{display:'inline'}}>Gender  :  </h4> <span>{user.gender}</span><br/>
                <h4  style={{display:'inline'}}>Department  :  </h4> <span>{user.department}</span><br/>
                <h4  style={{display:'inline'}}>Date  :  </h4> <span>{user.date}</span><br/>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
