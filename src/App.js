import { useState } from 'react';
import { CitySearch } from './components/citySearch/citySearch';
import { ClimateDisplay } from './components/climateDisplay/climateDisplay';
import { WEATHER_URL, WEATHER_KEY } from './api';
import './App.css';

function App() {
  const [climateDisplay, setClimateDisplay] = useState(null);

  const handleOnCitySearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const climateDisplayFetch = fetch(
      `${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`
    );

    Promise.all([climateDisplayFetch, weatherForecastFetch])
      .then(async (response) => {
        console.log(response);
        const weatherResponse = await response[0].json();

        setClimateDisplay({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  return (
    <div className='container'>
      <CitySearch onSearchChange={handleOnCitySearchChange} />
      {climateDisplay && <ClimateDisplay data={climateDisplay} />}
    </div>
  );
}

export default App;
