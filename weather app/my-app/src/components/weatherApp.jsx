import React,{useEffect , useState} from 'react';
import {BiCurrentLocation} from 'react-icons/bi'
import "../components/style.css"
import 'react-bootstrap/Button'
const WeatherApp =()=>{


const [city, setCity]= useState(null)
const [search, setSearch] = useState("karachi")

useEffect(()=>{
const fetchApi = async () =>{
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=47fd3c069f8085eef2b1554bdf881f3b`
const response = await fetch(url);
const resJson = await response.json()
console.log(resJson)
setCity(resJson.main);
}

  fetchApi();
},[search])


  return(
<>
<div className="box">
  <div className="inputData">
    <input type="text" value={search} placeholder="Enter City Name.." onChange={(event)=>{setSearch(event.target.value)}}/>
  </div>
  {!city ? (
    <p>No Data Found...</p>
  ) : (
<div className="info">
  <h1 className="location">
<BiCurrentLocation className='icon'/>{search}
  </h1>
  <h1 className='temp'>{city.temp}° Celsius</h1>
<h3>Min : {city.temp_min} | Max : {city.temp_max}</h3>
</div>)}
</div>
</>

  )
}
export default WeatherApp;
