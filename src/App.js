import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Cards, Chart, CountryDropDown} from './components/';
import styles from './App.module.css'
import {fetchData} from './api';
import coronaImg from './images/COVID-19.png'


function App() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');


    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
    },[]);

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setData(fetchedData)
        setCountry(country);
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={coronaImg} alt={'COVID-19'}/>
            <Cards data={data}/>
            <CountryDropDown handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    );
}

export default App;
