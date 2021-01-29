import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = (props) => {
  return ( 
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <li><Link to="/order/events/new">Order new</Link></li>
      <li><Link to="/order/events/:id">Order id</Link></li>
    </div>
  );
};

Waiter.prototype = {

};
 
export default Waiter;