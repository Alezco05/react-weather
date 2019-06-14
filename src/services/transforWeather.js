import {SNOW} from '../constants/weathers';
import convert from 'convert-units';
const getTemp = temp => {return convert(temp).from('K').to('C').toFixed(1);}
//const getState = weather => SNOW 
const transforWeather = (weather_data) =>{ 
    const {humidity,temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = SNOW;
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        wind:speed,
        weatherState
        }
    return data;
}
export default transforWeather;