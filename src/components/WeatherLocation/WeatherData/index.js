import React from 'react';
import WheaterExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {UMBRELLA} from '../../../constants/weathers';
//,SUNNY,RAIN,SNOW,CLOUDY,SUNNYOVERCAST,CLOUD,CLOUDYWINDY
const WeatherData = () => <div>
<WeatherTemperature temperature={20} weatherState={UMBRELLA} />
<WheaterExtraInfo humidity={80} wind={10 + "m/s"}/>
</div>

export default WeatherData;