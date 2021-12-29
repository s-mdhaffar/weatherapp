import { useEffect, useState } from 'react';
import './App.css';
import WeatherApi from './Components/WeatherApi';
import axios from 'axios'

function App() {
  // const [weather, setWeather] = useState()
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //    const fetchData=async()=>{
  //     try {
  // const res= await axios.get("https://jsonplaceholder.typicode.com/users")
  // console.log(res)
  // setWeather(res.data)
  //     } catch (error) {
          
  //     }
  //    }
  //    fetchData()
  //    setLoading(false)
  //        }, [])
  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      {
        loading?"Loading...":weather.map(el=><div key={el.id}>
          <h1>{el.name}</h1>
          <h2>{el.email} </h2> 
          <h3>{el.address.city} </h3>
          </div> )
      } */}
      <WeatherApi/>
    </div>
  );
}

export default App;
