import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

// import PropTypes from 'prop-types';
 import {SNOW,UMBRELLA} from '../../constants/weathers';
const data1 = {
    temperature: 10,
    weatherState: SNOW,
    humidity: 80,
    wind: 10
}
const data2 = {
    temperature: 20,
    weatherState: UMBRELLA,
    humidity: 90,
    wind: 25
}

var cont = 1;
class WeatherLocation extends Component { 

    constructor(){
        super();
        this.state = {
            city: 'Barranquilla',
            data: data1
        };
    }
    handleUpdateClick = () => {
        if(cont === 1){
            this.setState({ data: data2});
            cont = 0;
        }
        else{
            this.setState({ data: data1});
             cont = 1;   
            }
    }
    render = () => {
        const {city,data} = this.state;
        return(<div> 
        <Location city={city}/>
        <WeatherData data={data}/>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
}
export default  WeatherLocation;