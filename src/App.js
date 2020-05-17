import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Cards, Chart, CountryDropDown} from './components/';
import styles from './App.module.css'
import {fetchData} from './api';


function App() {
    const [data, setData] = useState({});

    useEffect(async () => {
        const fetchedData = await fetchData();
        console.log(fetchedData)
        setData(fetchedData);
    },[]);

    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryDropDown/>
            <Chart/>
        </div>
    );
}

export default App;
