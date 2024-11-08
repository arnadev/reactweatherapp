import { useState } from "react";
import { createContext } from "react";
import getWeather from "../api/index";

export const WeatherContext=createContext(null);

export const WeatherProvider=(props)=>{
    const [search,setSearch]=useState(null);
    const [weather,setWeather]=useState(null);

    const getWeatherData=async()=>{
        const weather=await getWeather(search);
        return weather;
    };

    return(
        <WeatherContext.Provider value={{search,setSearch,weather,setWeather,getWeatherData}}>
            {props.children}
        </WeatherContext.Provider>
    );
};