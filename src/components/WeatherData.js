import React from 'react';
import WheaterExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


const WeatherData = () => <div>
<WeatherTemperature temperature={20} weatherState="WiCloud" />
<WheaterExtraInfo humidity="80" wind='10m/s'/>


</div>

export default WeatherData;