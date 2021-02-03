import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Paper from '@material-ui/core/Paper';
import ReactDataGrid from 'react-data-grid';
import Button from '@material-ui/core/Button';

import 'react-calendar/dist/Calendar.css';




const columns = [
  { key: 'id', name: 'Clock' },
  { key: 'table_1', name: 'Table 1', editable: true },
  { key: 'table_2', name: 'Table 2', editable: true },
  { key: 'table_3', name: 'Table 3', editable: true },
  { key: 'table_4', name: 'Table 4', editable: true },
  { key: 'table_5', name: 'Table 5', editable: true },
  { key: 'table_6', name: 'Table 6', editable: true },
];

const rows = [
  { id: '12:00 - 12:30'},
  { id: '12:30 - 13:00'},
  { id: '13:00 - 13:30'},
  { id: '13:30 - 14:00'},
  { id: '14:00 - 14:30', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '14:30 - 15:00', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '15:00 - 15:30', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '15:30 - 16:00', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '16:00 - 16:30', table_2: 'Booked'},
  { id: '16:30 - 17:00', table_2: 'Booked'},
  { id: '17:00 - 17:30', table_2: 'Booked'},
  { id: '17:30 - 18:00'},
  { id: '18:00 - 18:30'},
  { id: '18:30 - 19:00'},
  { id: '19:00 - 19:30', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '19:30 - 20:00', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '20:00 - 20:30', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '20:30 - 21:00', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '21:00 - 21:30', table_1: 'booked', table_3: 'booked', table_4: 'booked',table_5: 'booked'},
  { id: '21:30 - 22:00'},
  { id: '22:00 - 22:30'},
];



const Tables = () =>  ( 
  <Paper >
    <div className={styles.componet}><h1>Table View</h1>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>
    </div>    
    <div className={styles.componet}>
      <div className={styles.tableWidth}>
        <ReactDataGrid
          enableCellSelect={true}
          rowsCount={3}
          columns={columns}
          rows={rows}  />
      </div>    
      <div className={styles.calendar}>
        <Calendar /> 
      </div>    
    </div>
    



  </Paper>   
);

export default Tables;