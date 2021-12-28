import { useEffect, useState } from "react"
import axios from "axios"


const WeatherApi = () => {

    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState("sfax")

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
            params: {q: 'sfax'},
            headers: {
              'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
              'x-rapidapi-key': '24a0e995d5mshe6acf4191868848p16ffb6jsna8ac71854a9d'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              // eslint-disable-next-line react-hooks/exhaustive-deps
              setWeather(response.data);
          }).catch(function (error) {
              console.error(error);
          });}
       
        , [])

    return (
        <div>
            <h1>{weather.city.name}</h1>
            <h2>{weather.city.country}</h2>
            <h2>{weather.list[0].humidity} </h2>
        </div>
    )
}

export default WeatherApi
