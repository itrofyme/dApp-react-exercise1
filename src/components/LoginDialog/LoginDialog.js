import { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import styles from "./LoginDialog.module.css";
import firebase from "firebase";

// todo move styles into *.module.css
const useStyles = makeStyles((theme) => ({
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


const LoginDialog = ({isOpen, handleClose}) => {
  const classes = useStyles();
  const auth = firebase.apps[0].auth();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const submitLogin = (e) => {
    e.preventDefault();    
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      handleClose();
    })
  }

  return (
    <>
      <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={handleClose}>
        <DialogContent>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onInput={ e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onInput={ e => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginDialog;
