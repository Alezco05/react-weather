import React from 'react';
const WeatherExtraInfo= ({humidity,wind}) => <div><span>{`Humidity ${humidity}% - `}</span><span>{`Wind: ${wind} `}</span></div>;
export default  WeatherExtraInfo;