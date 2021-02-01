import React from 'react';
import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.component}>
    <header className="App-header">
      <p>
    Dashboard.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
    Learn React
      </a>
    </header>
  </div>
);
 
export default HomePage;