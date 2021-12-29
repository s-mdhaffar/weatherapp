import { useEffect, useState } from "react"
import axios from "axios"


const WeatherApi = () => {

    const [weather, setWeather] = useState([])
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState("harry potter")

    useEffect(() => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
        //     params: {q: 'sfax'},
        //     headers: {
        //       'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        //       'x-rapidapi-key': '24a0e995d5mshe6acf4191868848p16ffb6jsna8ac71854a9d'
        //     }
        //   };
        var options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: city},
            headers: {
              'x-rapidapi-host': 'imdb8.p.rapidapi.com',
              'x-rapidapi-key': '24a0e995d5mshe6acf4191868848p16ffb6jsna8ac71854a9d'
            }
          };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data);
        //       // eslint-disable-next-line react-hooks/exhaustive-deps
        //       setWeather(response.data);
        //   }).catch(function (error) {
        //       console.error(error);
        //   })
        const fetchdata = async() => {
            try {
                const res = await axios.request(options);
                console.log(res)
                setWeather(res.data.d)
            } catch (error) {
                console.error(error)
            }
        }
        
        fetchdata();
        setLoading(false)
    }
        , [city])

        // useEffect(() => {
        //     effect
        //     return () => {
        //         cleanup
        //     }

        // }, [input])

        const handleSubmit=(e)=> {
e.preventDefault();

        }

    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}  />
                
            </form>
            {
                loading ? <h2>loading...</h2>
                :
         <div>
             {
                 weather.map(el=>
                    <div key={el.id}>
                        <img  src={el.i.imageUrl} alt="" />
                    </div>
                    )
                }
         </div>
        }
        </div>
    )
}

export default WeatherApi
