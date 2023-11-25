import React from 'react';
import CityTime from './CityTime';
import { cities } from './cities';

export default function ClockDashboard() {
  return (
    <>
      <h1 className="clock-dashboard">ClockDashboard</h1>

      <ul className="cities">
        {cities.map((city, index) => (
          <CityTime city={city} key={index} />
        ))}
      </ul>
    </>
  );
}
