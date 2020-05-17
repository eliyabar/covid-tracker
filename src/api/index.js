import axios from 'axios'

const apiUrl = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(apiUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;
    } catch (error) {
        // Todo throw error
    }
}
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${apiUrl}/daily`)
        console.log(data)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        console.log('fetchDailyData: ', modifiedData)
        return modifiedData;
    } catch (error) {

    }
}