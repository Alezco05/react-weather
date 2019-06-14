import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transforWeather from '../../services/transforWeather'; 
const location = "Barranquilla";
const api_key = "7a14aabf0ecbe0c414dd10231690cdef"; 
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component { 
    constructor(){
        super();
        this.state = {
            city: 'Barranquilla',
            data: null
        };
    }
     handleUpdateClick = () => {
        fetch(api_weather)
        .then(data=>{
            return data.json();
        })
        .then(weather_data => {
            const data = transforWeather(weather_data);
            this.setState({data});
        }).catch(error=>{
            console.log(error);
        })
    }
    componentWillMount(){
        this.handleUpdateClick();
    }
    render = () => {
        console.log("render");
        const {city,data} = this.state;
        return(<div> 
        <Location city={city}/>
        {data ?  <WeatherData data={data}/>: "Cargando ...."}
        </div>
        );
    }
}
export default  WeatherLocation;
