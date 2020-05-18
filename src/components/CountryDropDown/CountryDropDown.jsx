import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryDropDown.module.css'
import {fetchCountries} from '../../api/index'

export const CountryDropDown = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(()=> {
        (async () => {
            setFetchedCountries(await fetchCountries())
        })()
    },[setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue ='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value={''}>Global</option>
                {fetchedCountries.map((country, index)=> <option key={index}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}