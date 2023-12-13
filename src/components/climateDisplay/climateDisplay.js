import React from 'react';
import './climateDisplay.css';

export const ClimateDisplay = ({ data }) => {
  return (
    <div className='weather'>
      <div className='left'>
        <img
          alt='weather'
          className='weather-icon'
          src={`img/${data.weather[0].icon}.png`}
        />
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
      </div>
      <div className='right'>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Temperature:</span>
            <span className='parameter-value'>
              {Math.round(data.main.temp)}°C
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like:</span>
            <span className='parameter-value'>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity:</span>
            <span className='parameter-value'>{data.main.humidity}%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure:</span>
            <span className='parameter-value'>{data.main.pressure} hPa</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind:</span>
            <span className='parameter-value'>{data.wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};
