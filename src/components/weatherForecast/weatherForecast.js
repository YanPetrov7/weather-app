import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './weatherForecast.css';

const WEEKDAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const WeatherForecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEKDAY_NAMES.slice(dayInAWeek).concat(
    WEEKDAY_NAMES.slice(0, dayInAWeek)
  );

  const renderDailyDetails = (item) => (
    <div className='daily-details-grid'>
      <div className='daily-details-grid-item'>
        <label>Pressure:</label>
        <label>{item.main.pressure}</label>
      </div>
      <div className='daily-details-grid-item'>
        <label>Humidity:</label>
        <label>{item.main.humidity}</label>
      </div>
      <div className='daily-details-grid-item'>
        <label>Clouds:</label>
        <label>{item.clouds.all}%</label>
      </div>
      <div className='daily-details-grid-item'>
        <label>Wind speed:</label>
        <label>{item.wind.speed} m/s</label>
      </div>
      <div className='daily-details-grid-item'>
        <label>Sea level:</label>
        <label>{item.main.sea_level}m</label>
      </div>
      <div className='daily-details-grid-item'>
        <label>Feels like:</label>
        <label>{item.main.feels_like}°C</label>
      </div>
    </div>
  );

  const renderAccordionItems = () =>
    data.list.slice(0, 7).map((item, idx) => (
      <AccordionItem key={idx}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className='daily-item'>
              <img
                src={`img/${item.weather[0].icon}.png`}
                className='icon-small'
                alt='weather'
              />
              <label className='day'>{forecastDays[idx]}</label>
              <label className='description'>
                {item.weather[0].description}
              </label>
              <label className='min-max'>
                max: {Math.round(item.main.temp_max)}°C / min: {' '}
                {Math.round(item.main.temp_min)}°C
              </label>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>{renderDailyDetails(item)}</AccordionItemPanel>
      </AccordionItem>
    ));

  return <Accordion allowZeroExpanded>{renderAccordionItems()}</Accordion>;
};
