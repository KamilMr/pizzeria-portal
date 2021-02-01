import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.scss';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const Login = (props) => ( 
  <Container maxWidth='lg'>
    <Toolbar />
    <form className={styles.container}>
      <h2>Admin</h2>
      <div>
        <TextField id="standard-basic" label="Login" />
      </div>
      <div>
        <TextField id="standard-basic" label="Password" />
      </div>
    </form>
    <Toolbar />
    <Button component={Link} to={`${process.env.PUBLIC_URL}/`}>Log In</Button>
  </Container>
);



export default Login;