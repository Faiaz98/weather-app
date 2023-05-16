import { useState } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';

export default function Weather() {
    const [location, setLocation] = useState(' ');
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = async () => {
        try{
            const response = await axios.get(

            );
            setWeatherData(response.data);
        }catch(error){
            console.error(error);
        }
    };

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        getWeatherData();
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleFormSubmit}>
                <input type ="text" placeholder='Enter location..' value ={location} onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">
                    <FiSearch />

                </button>
            </form>
            {weatherData && (
                <div>
                    <h2>{weatherData.location.name}</h2>
                    <p>{weatherData.current.condition.text}</p>
                    <img src={weatherData.current.condition.icon} alt="Weather Icon" />
                    <p>{weatherData.current.temp_c}°C</p>
                </div>    
            )}
        </div>
    );
}