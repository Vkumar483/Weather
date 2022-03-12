import React,{useState,useEffect} from 'react'
import WeatherCard from './weatherCard';
import './style.css'

const Temp = () => {
       const[searchValue,setSearchValue]=useState("patna");  
       const[tempInfo,setTempInfo]=useState({});

       const getWeatherInfo =async()=> {
             try{
                   let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b91f7159e37485a0fff6ff5aa2ecad56`

                   const res = await fetch(url);
                   const data = await res.json();

                   const {temp,humidity,pressure}=data.main;
                   const{main: weathermood}=data.weather[0];
                   const{name}=data;
                   const{speed}=data.wind;
                   const {country,sunset}=data.sys;

                   const myWeatherInfo={
                       temp,
                       humidity,
                       pressure,
                       weathermood,
                       name,
                       speed,
                       country,
                       sunset
                   }

                   setTempInfo(myWeatherInfo)
             }catch(error) 
             {
                 console.log(error);
             }
       }

      useEffect(() => {
        getWeatherInfo()
      }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="search city..."
                        autoFocus
                        id="search"
                        className="searchTerm" 
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                        />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/* our main template */}
            <WeatherCard tempInfo ={tempInfo}/>
           
        </>
    )
}

export default Temp
