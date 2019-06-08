import React from 'react';
import { WiUmbrella } from 'weather-icons-react';
import { WiDaySunny } from 'weather-icons-react';
import { WiRain } from 'weather-icons-react';
import { WiSnow } from 'weather-icons-react';
import { WiCloudy } from 'weather-icons-react';
import { WiDaySunnyOvercast } from 'weather-icons-react';
import { WiCloud } from 'weather-icons-react';
import { WiCloudyWindy } from 'weather-icons-react';

const getWeatherIcon = weatherState =>{
    switch(weatherState){
        case 'WiUmbrella':
            return <WiUmbrella/>;
        case 'WiDaySunny':
            return <WiDaySunny/>;
        case 'WiRain':
            return <WiRain/>;
        case 'WiSnow':
            return <WiSnow/>;
        case 'WiCloudy':
            return <WiCloudy/>;
        case 'WiDaySunnyOvercast':
            return <WiDaySunnyOvercast/>;
        case 'WiCloud':
            return <WiCloud/>
        case 'WiCloudyWindy':
            return <WiCloudyWindy/>;
        default:
            return <WiUmbrella/>;
    }
}
const WeatherTemperature= ({temperature, weatherState}) => {
    return(
        <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature}° C`}</span>
        </div>
    );
};
export default  WeatherTemperature;