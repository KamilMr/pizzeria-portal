import React from 'react';
import styles from './HomePage.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const HomePage = () => (
  <div>
    <Toolbar />
    <Grid 
      container 
      spacing={1} 
      direction="row"
      justify="space-around">
      <Grid item xs={12}>
        <Paper className={styles.header}>
          <h1>Today`s statistics</h1>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <h2>Todays Events</h2>
          <p>1 event at 7 pm</p>
          <p>1 event at 2 pm</p>
     
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <h2>Online Orders</h2>
          <p>There are one order for 2 pm</p>
          <p>There are one order for 12 pm</p>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <h2>Local Orders</h2>
          <p>There are one table booked at 4 pm </p>
        </Paper>
      </Grid>
    </Grid>
  </div>
);
 
export default HomePage;