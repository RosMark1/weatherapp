
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import LocationSearch from './LocationSearch';
import Day from './Day';
import { locations } from './LocationSearch';

function App() {
  const [forecast, setForecast] = useState(null);
  const [location, setLoaction] = useState(0);
  

   const get7DaysForecast = (apiData => { //organized data details
    const weekForecast = [];
    const times = apiData.hourly.time;
    const temps = apiData.hourly.temperature_2m;
    

    for(let i = 12; i < temps.length; i+=24){
      weekForecast.push({
        date: times[i].replace("T12:00", ""),
        temperature: temps[i],
      })
    }
    return weekForecast;
   });

  useEffect(() => {
    const {longitude, latitude} = locations[location]
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    fetch(url)
    .then(res => res.json())
    .then(data =>setForecast(get7DaysForecast(data)))
  } ,[location])

  return (
    <div className="app-container">
      <Header />
      <div className='grid'>
        <div className='forecast-header'>
          <LocationSearch onLocationChange={setLoaction} />
        </div>
        <div className='forecast-dayes'>  
          {forecast === null ? "Loading..." : forecast.map(({date, temperature})=> <Day date={date} temperature={temperature} />)}
        </div>    
      </div>
      </div>
  );
}

export default App;
