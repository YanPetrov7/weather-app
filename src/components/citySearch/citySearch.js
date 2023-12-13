import React, { useState } from 'react';
import { GEO_OPTIONS, GEO_URL } from '../../api';
import { AsyncPaginate } from 'react-select-async-paginate';

export const CitySearch = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const fetchCityOptions = (inputValue) => {
    return fetch(
      `${GEO_URL}?minPopulation=2000000&namePrefix=${inputValue}`,
      GEO_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder='Enter city name'
      debounceTimeout={700}
      value={search}
      onChange={handleOnChange}
      loadOptions={fetchCityOptions}
    />
  );
};
