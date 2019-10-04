import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import ImageUpload from './ImageUpload'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    dl: '',
    dlState: '',
    currentIncome: '',
    currentHouseholdIncome: '',
    currentPayment: '',
    employer: '',
    supervisor: '',
    supervisorPhoneNo: '',
    coFirstName: '',
    coLastName: '',
    otherResidents: '',
    isUploading: false,
    progress: 0,
    files: []
  })

  const handleChange = e => {
    setValues({
    ...form,
    [e.target.name]: e.target.value
    });
  }

  const customOnChangeHandler = (event) => {
    const { target: { files } } = event;
    const filesToStore = [];
    files.forEach(file => filesToStore.push(file));
    setValues({
      ...form,
      files: filesToStore
    });
  }

  const startUploadManually = () => {
    const { files } = files;
    files.forEach(file => {
      this.fileUploader.startUpload(file)
    });
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form.firstName);
    fetch('http://localhost:8080/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        dl: form.dl,
        dlState: form.dlState,
        currentIncome: form.currentIncome,
        currentHouseholdIncome: form.currentHouseholdIncome,
        currentPayment: form.currentPayment,
        employer: form.employer,
        supervisor: form.supervisor,
        supervisorPhoneNo: form.supervisorPhoneNo,
        coFirstName: form.coFirstName,
        coLastName: form.coLastName,
        otherResidents: form.otherResidents
      })
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HomeIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Rental Application
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dl"
            label="Driver's License Number"
            name="dl"
            autoComplete="dl"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dlState"
            label="Issuing State"
            name="dlState"
            autoComplete="dlState"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="currentIncome"
            label="Current Income Per Year"
            name="currentIncome"
            autoComplete="currentIncome"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="currentHouseholdIncome"
            label="Current Household Income"
            name="currentHouseholdIncome"
            autoComplete="currentHouseholdIncome"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="currentPayment"
            label="Current Rent/Mortgage Payment"
            name="currentPayment"
            autoComplete="currentPayment"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="employer"
            label="Current Employer"
            name="employer"
            autoComplete="employer"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="supervisor"
            label="Current Supervisor"
            name="supervisor"
            autoComplete="supervisor"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="supervisorPhoneNo"
            label="Supervisor Phone Number"
            name="supervisorPhoneNo"
            autoComplete="supervisorPhoneNo"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="coFirstName"
            label="Co-tenant First Name"
            name="coFirstName"
            autoComplete="coFirstName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="coLastName"
            label="Co-tenant Last Name"
            name="coLastName"
            autoComplete="coLastName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="otherResidents"
            label="List of Other Residents"
            name="otherResidents"
            autoComplete="otherResidents"
            autoFocus
            onChange={handleChange}
          />
          <ImageUpload />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
