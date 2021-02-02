import React from 'react';
import styles from './HomePage.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const demoContent = [
  {id: '1', type: 'event', time: '7 pm'},
  {id: '2', type: 'event', time: '2 pm'},
  {id: '3', type: 'online', time: '2 pm'},
  {id: '4', type: 'online', time: '12 pm'},
  {id: '5', type: 'local', time: '4 pm', table: 2},
];

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
          {demoContent.map(item => {
            if(item.type === 'event'){
              return (
                <p>One event start at {item.time}</p>
              );
            }else {
              return (
                console.log('No more events')
              );
            }
          })}
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <h2>Online Orders</h2>
          {demoContent.map(item => {
            if(item.type === 'online'){
              return (
                <p>There is one order to be delivered at {item.time}</p>
              );
            }else {
              return (
                console.log('No more orders')
              );
            }
          })}
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <h2>Local Orders</h2>
          {demoContent.map(item => {
            if(item.type === 'local'){
              return (
                <p>One reservation at {item.time} table: {item.table}</p>
              );
            }else {
              return (
                console.log('No more reservation')
              );
            }
          })}
        </Paper>
      </Grid>
    </Grid>
  </div>
);
 
export default HomePage;