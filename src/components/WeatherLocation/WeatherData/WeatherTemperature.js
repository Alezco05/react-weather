import React from 'react';
import { WiUmbrella,WiDaySunny,WiRain,WiSnow,WiCloudy
,WiDaySunnyOvercast,WiCloud,WiCloudyWindy} from 'weather-icons-react';
import {UMBRELLA,SUNNY,RAIN,SNOW,CLOUDY,SUNNYOVERCAST,CLOUD,CLOUDYWINDY} from '../../../constants/weathers';
import PropTypes from 'prop-types';
const getWeatherIcon = weatherState =>{
    switch(weatherState){
        case UMBRELLA:
            return <WiUmbrella/>;
        case SUNNY:
            return <WiDaySunny/>;
        case RAIN:
            return <WiRain/>;
        case SNOW:
            return <WiSnow/>;
        case CLOUDY:
            return <WiCloudy/>;
        case SUNNYOVERCAST:
            return <WiDaySunnyOvercast/>;
        case CLOUD:
            return <WiCloud/>
        case CLOUDYWINDY:
            return <WiCloudyWindy/>;
        default:
            return <WiUmbrella/>;
    }
}
const WeatherTemperature= ({temperature, weatherState}) => {
    return(
        <div>
        {getWeatherIcon(weatherState)}
        <span>{` ${temperature}°C`}</span>
        </div>
    );
};
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}


export default  WeatherTemperature;