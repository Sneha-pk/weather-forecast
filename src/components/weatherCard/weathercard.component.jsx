import React from 'react';
import './weathercard.styles.scss';

const WeatherCard = ({item}) => {
    const date = new Date(item.dt*1000).toLocaleDateString();
    const day = new Date(item.dt*1000).toLocaleString('default', {weekday: 'long'});

    return(
        <div className="weather-card-component">
            <span>{day}</span>
            <span>{date}</span>
            <span>{'Min: ' + item.temp.min + '\u00b0'}</span>
            <span>{'Max: ' + item.temp.max + '\u00b0'}</span>
            <div className='weather-description'>
                <span>Weather:</span>
                <div className='desc'>
                    <span>{ item.weather[0].description}</span>
                    <img width="20px" height="20px" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather"></img>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;