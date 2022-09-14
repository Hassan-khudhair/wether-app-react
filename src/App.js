import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8441900b524b3f440a3802d745ec4532`;


  const searchLoction = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data.list[0])
        setCity(res.data.city)
      })
      setLocation('')
    }
  }




  return (
    <div className="container">
      <div className="forms">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLoction}
          type="text" />
      </div>
      <div className="name">
        <p>{city.name}</p>
      </div>
      <div className="degre">
        {data.main ? <p>{(data.main.temp.toFixed()) - 273} °C</p> : null}
      </div>
      <div className="wether">
        
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </div>
      <div className="footer">
        <div className="degres">
        {data.main ? <p className="head">{(data.main.feels_like.toFixed()) - 273} °C</p> : null}
          <p >feels Like</p>
        </div>
        <div className="pressure">
        {data.main ? <p className="head">{data.main.humidity} %</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind ? <p className="head">{data.wind.speed} MPH</p> : null}
          <p>winds</p>
        </div>
      </div>

    </div>
  );
}

export default App;
