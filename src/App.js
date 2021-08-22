import React from 'react';
import Weather from './components/weather/weather.component';
import './App.css';

// const API_KEY = "aae240d47e5a9b90eb5f1f22c46dfabf";
// const API_KEY1 = "pk.6416ea93cd54816025306bba73e4461d";
const App = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Weather/>
    </div>
  )
}


export default App;
