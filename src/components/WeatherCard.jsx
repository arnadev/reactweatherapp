const WeatherCard=(props)=>{
    return(
        <div className="weather-card">
            <h1>{props.weather.location.name}-{props.weather.location.country}</h1>
            <img src={props.weather.current.condition.icon} alt='Weather Icon'></img>
            <h2>Local Time:{props.weather.location.localtime}</h2>
            <h2>Temperature: {props.weather.current.temp_c}C || {props.weather.current.temp_f}F</h2>
            <h2>Weather Condition: {props.weather.current.condition.text}</h2>
            <h2>Wind Speed: {props.weather.current.wind_kph}Kmph || {props.weather.current.wind_mph}Mph</h2>
            <h2>Visibility: {props.weather.current.vis_km}Km || {props.weather.current.vis_miles}Miles</h2>
            <h2>UV: {props.weather.current.uv}</h2>
        </div>
    );
};

export default WeatherCard;