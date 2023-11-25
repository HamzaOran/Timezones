import React from 'react';
import CityTime from './CityTime';

export default function ClockDashboard() {
  const cities = [
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'LosAngeles', timezone: 'America/Los_Angeles' },
    { name: 'Chicago', timezone: 'America/Chicago' },
    { name: 'Denver', timezone: 'America/Denver' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Paris', timezone: 'Europe/Paris' },
    { name: 'Berlin', timezone: 'Europe/Berlin' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Sydney', timezone: 'Australia/Sydney' },
    { name: 'Beijing', timezone: 'Asia/Shanghai' },
  ];
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
