import React,{useState,useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import { Radio, FormHelperText, FormLabel, RadioGroup, StyledRadio, InputLabel,MenuItem, Select } from '@material-ui/core';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'scroll',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
},
form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
},
submit: {
    margin: theme.spacing(3, 0, 2),
},



}));

export default function TransitionsModal({department1}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


//   const classes = useStyles();
//   let history = useHistory();

  const [user, setUser] = useState({
      name: "",
      email: "",
      mobile: "",
      city: "",
      gender: "",
      department: "",
      date: "",
      password: ""
  });
  const { name, email, mobile, city, gender, department, date, password } = user;
  const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:9000/data", user);
      // history.push("/");
      window.location.reload();
    };
    

    //   getDepartment();

  return (
    <div>
      <Button variant="contained" size="mediam" color="primary" onClick={handleOpen} className={classes.button} startIcon={<AddIcon />}>Add User</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        width="20px"
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
      >
        <Fade in={open} style={{width:'50%'}}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Edit User Details</h2> */}
            <div>

            {/* <Container component="main" maxWidth="xs" component={Paper}> */}
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="fullName"
                                label="FUll Name"
                                autoFocus
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => onInputChange(e)}

                            // value={this.state.firstName}
                            // onChange={e => this.change(e)}
                            // errorText={this.state.firstNameError}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="mobileno"
                                name="mobile"
                                variant="outlined"
                                required
                                fullWidth
                                id="mobileno"
                                label="Mobile No."
                              
                                value={mobile}
                                onChange={e => onInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="City"
                                name="city"
                                variant="outlined"
                                required
                                fullWidth
                                id="city"
                                label="City"
                               
                                value={city}
                                onChange={e => onInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormLabel component="legend" defaultValue="left">Gander</FormLabel>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio color="primary" />}
                                    label="Male"
                                    labelPlacement="male"
                                    name='gender'
                                    // value={name}
                                    onChange={e => onInputChange(e)}
                                />
                                <FormControlLabel
                                    value={'female'}
                                    control={<Radio color="primary" />}
                                    label="Female"
                                    labelPlacement="female"
                                    name='gender'
                                    onChange={e => onInputChange(e)}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio color="primary" />}
                                    label="Other"
                                    labelPlacement="other"
                                    name='gender'
                                    onChange={e => onInputChange(e)}
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="date"
                                label="Date"
                                type="date"
                                name='date'
                                defaultValue="dd/mm/yyyy"
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={date}
                                onChange={e => onInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* <InputLabel htmlFor="age-native-simple">Select Department</InputLabel> */}
                            {/* <FormHelperText>Placeholder</FormHelperText> */}
                            <Select
                                variant="outlined"
                                required
                                fullWidth
                                native
                                // displayEmpty            
                    
                                inputProps={{
                                    name: 'department',
                                    id: 'age-native-simple',
                                }}
                                onChange={e => onInputChange(e)}
                            >
                                <option value="" disable>Select Department</option>
                                {
                                    

                                department1.map((dept ,i) => (
                                    <option  name='department' value="Human Resource Management"  >{dept.departmentName}</option>
                                 ) )
                                    
                                }
                                onChange={e => onInputChange(e)}
                            </Select>

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        style={{ float: "right"}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        {/* </Container > */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
