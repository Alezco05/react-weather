import React from 'react';
import { WiUmbrella,WiDaySunny,WiRain,WiSnow,WiCloudy
,WiDaySunnyOvercast,WiCloud,WiCloudyWindy} from 'weather-icons-react';
import {UMBRELLA,SUNNY,RAIN,SNOW,CLOUDY,SUNNYOVERCAST,CLOUD,CLOUDYWINDY} from '../../../constants/weathers' ;
import PropTypes from 'prop-types';

const getWeatherIcon = weatherState =>{
    switch(weatherState){
        case UMBRELLA:
            return <WiUmbrella size={90}/>;
        case SUNNY:
            return <WiDaySunny size={90}/>;
        case RAIN:
            return <WiRain size={90}/>;
        case SNOW:
            return <WiSnow size={90}/>;
        case CLOUDY:
            return <WiCloudy size={90}/>;
        case SUNNYOVERCAST:
            return <WiDaySunnyOvercast size={90}/>;
        case CLOUD:
            return <WiCloud size={90}/>
        case CLOUDYWINDY:
            return <WiCloudyWindy size={90}/>;
        default:
            return <WiUmbrella size={90}/>;
    }
}
const WeatherTemperature= ({temperature, weatherState}) => {
    return(
        <div className="weatherTemperature">
        {getWeatherIcon(weatherState)}
        <span>{` ${temperature}°C`}</span>
        </div>
    );
};
WeatherTemperature.propTypes = {
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired
}


export default  WeatherTemperature;