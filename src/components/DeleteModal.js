import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from "@material-ui/core"
import axios from "axios"

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

export default function TransitionsModal({id,name,email}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async () =>{
    await axios.delete(`http://localhost:9000/data/${id}`);
    window.location.reload();
  }
  return (
    <div>
      <Button variant="contained" size="mediam" color="secondary" onClick={handleOpen} className={classes.button} startIcon={<DeleteIcon />}>Delete</Button>
      
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
            <h2 id="transition-modal-title">Delete User</h2>
            <h4  style={{display:'inline'}}>User Name  :</h4> <span>{name}</span><br/>
                <h4  style={{display:'inline'}}>Email  :</h4> <span>{email}</span><br/><br/>
                <Button variant="contained" size="small"color="secondary" className={classes.button } style={{float:"right"}} onClick={() => deleteUser(id)}>Confirm</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
