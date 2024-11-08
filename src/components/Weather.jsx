import { WeatherContext } from "../contexts/WeatherContext";
import WeatherCard from "./WeatherCard"
import { useEffect, useContext } from "react"

const Weather=()=>{
    
    const {search,setSearch,weather,setWeather,getWeatherData}=useContext(WeatherContext);
    

    const searchClick=async()=>{
        const input=document.querySelector('input');
        if(input!==null){
          setSearch(input.value);
          input.value='';
        }
        const weather=await getWeatherData(); 
        setWeather(weather);
        
    };

    const getUserLocation=async()=>{
            navigator.geolocation.getCurrentPosition((position)=>{
            const coords=`${position.coords.latitude},${position.coords.longitude}`;
            setSearch(coords);
        });
    };

    useEffect(()=>{
        const setInitial=async()=>{
            await getUserLocation();
        };
        setInitial();
    },[]);

    useEffect(() => {
        if (search!=='') {
            searchClick(); // Perform search when search value updates (i.e., after user location is set)
        }
    }, [search]);

    return(
        <div className="weather">
            {weather?
            <>
                <h1>Weather App</h1>
                <input placeholder={weather.location.name}/>
                <button value='Search' onClick={searchClick}>Search</button>
                <WeatherCard weather={weather}/>
            </>
            :
            <h1>Loading...</h1>
            }
        </div>
    );
};

export default Weather;