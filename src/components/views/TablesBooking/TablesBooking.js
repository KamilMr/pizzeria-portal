import React from 'react';
import styles from './TablesBooking.module.scss';
import { Link } from 'react-router-dom';


const Tables = (props) => {
  return ( 
    <div className={styles.component}>
      <h2>Tables Booking</h2>
      <li><Link to="/tables/booking/">Booking</Link></li>
      <li><Link to="/tables/booking/:id">Booking id</Link></li>
      <li><Link to="/tables/events/new">New Events</Link></li>
      <li><Link to="/tables/events/:id">New Booking</Link></li>
    </div>
  );
};

Tables.prototype = {

};
 
export default Tables;