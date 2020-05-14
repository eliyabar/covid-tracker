import React from 'react';
import './App.module.css';
import {Cards, Chart, CountryDropDown} from './components/';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Cards/>
      <CountryDropDown/>
      <Chart/>
    </div>
  );
}

export default App;
