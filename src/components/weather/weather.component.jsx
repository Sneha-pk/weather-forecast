import React, { useState } from "react";
import './weather.styles.scss';
import WeatherCard from "../weatherCard/weathercard.component";
import BeatLoader from 'react-spinners/BeatLoader';

const Weather = () => {
    const API_KEY = "pk.6416ea93cd54816025306bba73e4461d";
    const API_KEY1 = "aae240d47e5a9b90eb5f1f22c46dfabf";
    // the latitude and longitude of the location
    const [weather, setWeather] = useState ('')
    // the user input location
    const [location, setLocation] = useState('');
    // loading on api call
    const [isloading, setIsLoading] = useState(false);

    // to get geocodes and then its forecast
    const getGeoCode =  async event => {
        setIsLoading(true);
        await fetch(`https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${location}&format=json`)
        .then(response => response.json())
        .then(data => {
            const loc = data[0];
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${loc.lat}&lon=${loc.lon}&units=metric&
            exclude=current,minutely,hourly&appid=${API_KEY1}`)
            .then((res) =>  res.json())
            .then(data => {
                setWeather(data.daily.splice(1,7));
                setIsLoading(false);
            })
        }).catch(err => {
            setIsLoading(false);
            alert('Please enter a valid location.')
        });
    }

    return (
        <div className="weather-container">
            <div className="search-box">
                <input type="search" 
                placeholder="City, Suburb, Country"
                value = {location} 
                onChange={(event) => setLocation(event.target.value)}
                />
                <button onClick={getGeoCode}>Check Weather</button>      
            </div>
            
            {
                weather &&
                weather.map((item) => {
                    return <WeatherCard key={item.dt} item={item}/>
                })
            }
            {
                isloading && 
                <div className="loading">
                    <BeatLoader/>
                </div>
            }
        </div>
    )
}

export default Weather;