import axios from 'axios'

const url ='https://covid19.mathdro.id/api'

export const fetchData = async ()=>{
    try{
        const { data } = await axios.get(url)
        const modifiedData = {
            confrimed : data.confirmed,
            recovered : data.recovered,
            deaths  :   data.deaths,
            lastUpdate :data.lastUpdate
        }
        //console.log(modifiedData)
        return modifiedData
    }
    catch(error){
        return error;
    }
}