const getWeather=async(location)=>{
    const key='fbc7493c8d4d4a06888172037240210';
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`;
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("Error || "+response.status);
        }
        return await response.json();
    }
    catch(err){
        console.log("Error || "+err);
    }
};

export default getWeather;