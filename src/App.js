import React, { useEffect, useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Weather from './Weather';

function App() {
  const [city, setcity] = useState("")
  const [cityname, setcityname] = useState("")
  const [citytemp, setcitytemp] = useState("")
  const [description, setdescription] = useState("")
  const [windspeed, setwindspeed] = useState("")
  const [serch,setserch]=useState(false)
  const [icon , seticon]=useState("")

   const fetchweatherdata = async() => {
       let fetchdata = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=445a2043eb681b7e0a7d590187f36814`)
       let jsondata = await fetchdata.json() ;
       let { name ,main ,wind } = jsondata;
       setcityname(name)
       setcitytemp(main)
       setwindspeed(wind)
       let details = jsondata.weather[0];
       let {  description, icon } = details;
       setdescription(description)
     seticon(icon)
     setserch(false)
     }
     

   useEffect(() => {
     
     if (serch) {
         fetchweatherdata()
       }
     
   }, [serch])
   
  return (
    <>
      <h1 className="text-center text-4xl text-black">Weather App</h1>
       <div className="w-full flex justify-center items-center  ">
          <div className=" rounded-md shadow-lg flex items-center border border-black md:w-1/3 w-1/2 justify-center mt-20  bg-white p-2">
          <form onSubmit={(e)=>{e.preventDefault()}} className="flex-1">
            <input type="text"
            className="border-none outline-none md:w-full w-20 text-xl capitalize "
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
             }}
          />
          <button type="submit" className="text-black font-bold hidden" onClick={()=>(setserch(true))}>Search</button>
          </form>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>
      </div>
     <Weather serch={serch} windspeed={windspeed} cityname={cityname} citytemp={citytemp} description={description} icon={icon}/>

    </>
  );
}

export default App;
