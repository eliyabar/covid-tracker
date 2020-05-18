import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames'

function cardComponent(value, lastUpdate, title) {
    return <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[title.toLowerCase()])}>
        <CardContent>
            <Typography color={'textSecondary'} gutterBottom>{title}</Typography>
            <Typography variant={'h5'}>
                <CountUp start={0} end={value} duration={2.5} separator={','}/>
            </Typography>
            <Typography color={'textSecondary'}>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant={'body2'}>Number of {title.toLowerCase()}</Typography>
        </CardContent>
    </Grid>;
}

export const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    const cardsData = [
        {title: 'Infected', value: confirmed?.value},
        {title: 'Recovered', value: recovered?.value},
        {title: 'Deaths', value: deaths?.value},
    ]

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                {confirmed && cardsData.map(cd =>
                    cardComponent(cd.value, lastUpdate, cd.title))}
            </Grid>
        </div>)
}