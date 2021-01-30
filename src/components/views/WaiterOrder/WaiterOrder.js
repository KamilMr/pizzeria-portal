import React from 'react';
// import PropTypes from 'prop-types';
import styles from './WaiterOrder.module.scss';
import { Link } from 'react-router-dom';

const demoContent = [
  {id: '1'},
];

const Waiter = (props) => {
  return ( 
    <div className={styles.component}>
      <h2>Waiter order new</h2>
      <li><Link to="/order/new">Order new</Link></li>
      <li><Link to="/order/:id">Order id</Link></li>
    </div>
  );
};

Waiter.prototype = {

};
 
export default Waiter;