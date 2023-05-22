import axios from 'axios'
import { useEffect, useState } from 'react'
import {WeatherContainer, Temp, City} from './WeatherStyles'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=nairobi&units=imperial&appid=cf71e59b247adc2519210c8010398cb2'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect (() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    }, [])


    if(!data) return null;



  return (
    <WeatherContainer>
      <Temp>{(((data.main.temp)-32 )* 5/9).toFixed(0)}&#176;</Temp>
      <City>Nairobi, KE</City>
    </WeatherContainer>
  )
}

export default Weather