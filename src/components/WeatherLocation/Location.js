import React from 'react';
import PropTypes from 'prop-types';

//Destructuring
//props.city = {city}
//const {city} = props; 
const Location = ({city}) => (<div><h1>{city}</h1></div>);
Location.propTypes = {city: PropTypes.string.isRequired};

export default Location;