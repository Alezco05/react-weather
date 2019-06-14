import React from 'react';
import WheaterExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
//,SUNNY,RAIN,SNOW,CLOUDY,SUNNYOVERCAST,CLOUD,CLOUDYWINDY
const WeatherData = ({data}) => {
    const {temperature,weatherState,humidity,wind} = data;
    return(<div className="weatherDataCont">
    <WeatherTemperature temperature={temperature} weatherState={weatherState} />
    <WheaterExtraInfo humidity={humidity} wind={wind}/>
    </div>)}

WeatherData.propTypes = {data: PropTypes.shape({
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
})};
export default WeatherData;