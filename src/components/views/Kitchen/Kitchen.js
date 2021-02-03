import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const demoContent = [
  {number: '1', id: '1234', place: 'table 1', dish: ['Placki Ziemniaczane ', '+ cebula'], status: 'ready'},
  {number: '2', id: '1235', place: 'online', dish: ['Placki z grzybami '], status: 'ready'},
  {number: '3', id: '1237', place: 'table 5', dish: ['Zupa Curry ', '+ pieczarki'], status: 'ready'},
  {number: '4', id: '12322', place: 'online', dish: ['Placki Ziemniaczane ', '+ cebula'], status: ''},
  {number: '5', id: '12355', place: 'online', dish: ['Placki Ziemniaczane ', '+ cebula'], status: ''},
  {number: '6', id: '12311', place: 'table 1', dish: ['rosół ', '+ surówka'], status: ''},
  {number: '7', id: '12300', place: 'table 1', dish: ['rosół ', ''], status: ''},
];

const checkingStatus = (status) => {
  if (status === 'ready'){
    return( <Button>Ready</Button> );
  } else {
    return ( <Button>Click to set ready</Button> );
  }
};

const Kitchen = () => {
  return ( 
    <Paper className={styles.component}>
      <div className={styles.componet}><h1>Kitchen View</h1></div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.table_narrow}>Number</TableCell>
            <TableCell className={styles.table_narrow}>ID</TableCell>
            <TableCell className={styles.table_narrow}>Type</TableCell>
            <TableCell>Ordered dish</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.dish}</TableCell>
              <TableCell>
                {checkingStatus(row.status)}
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
 
export default Kitchen;