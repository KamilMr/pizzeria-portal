import React from 'react';
import styles from './Tables.module.scss';
import ReactDataGrid from 'react-data-grid';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, Table, TableHead } from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Paper from '@material-ui/core/Paper';




const columns = [
  { key: 'id', name: 'Clock' },
  { key: 'table 1', name: 'Table 1', editable: true },
  { key: 'table 2', name: 'Table 2', editable: true },
  { key: 'table 3', name: 'Table 3', editable: true },
  { key: 'table 4', name: 'Table 4', editable: true },
  { key: 'table 5', name: 'Table 5', editable: true },
  { key: 'table 6', name: 'Table 6', editable: true },
];

const rows = [
  { id: '12:00 - 12:30', title: '' },
  { id: '12:30 - 13:00', title: '' },
  { id: '13:00 - 13:30', title: '' },
  { id: '13:30 - 14:00', title: '' },
  { id: '14:00 - 14:30', title: '' },
  { id: '14:30 - 15:00', title: '' },
  { id: '15:00 - 15:30', title: '' },
  { id: '15:30 - 16:00', title: '' },
  { id: '16:00 - 16:30', title: '' },
  { id: '16:30 - 17:00', title: '' },
  { id: '17:00 - 17:30', title: '' },
  { id: '17:30 - 18:00', title: '' },
  { id: '18:00 - 18:30', title: '' },
  { id: '18:30 - 19:00', title: '' },
  { id: '19:00 - 19:30', title: '' },
  { id: '19:30 - 20:00', title: '' },
  { id: '20:00 - 20:30', title: '' },
  { id: '20:30 - 21:00', title: '' },
  { id: '21:00 - 21:30', title: '' },
  { id: '21:30 - 22:00', title: '' },
  { id: '22:00 - 22:30', title: '' },

];



const Tables = () =>  ( 
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={styles.header}><h1>Tables view</h1></TableCell>
        </TableRow>
      </TableHead>
      <TableRow>
        <TableCell className={styles.tableWidth}>
          <ReactDataGrid
            enableCellSelect={true}
            rowsCount={3}
            columns={columns}
            rows={rows}  />
        </TableCell>
        <TableCell>
          <Calendar />
        </TableCell>
      </TableRow>
    </Table>
  </Paper>   
);

export default Tables;