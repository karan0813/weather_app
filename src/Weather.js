import React from 'react'

const Weather = ({cityname,citytemp,description,icon ,windspeed}) => {
  return (
      <div className=" w-full md:p-10 md:mt-0 mt-6 h-90 ">
          <div className="lg:w-1/3 md:w-1/2 w-screen card-div  h-fit md:m-auto md:rounded-lg  shadow-xl ">
              <h1 className="text-center text-4xl font-bold capitalize p-4">{cityname}</h1>
              <div className="flex w-90  justify-around m-4 h-90 py-5 ">
                  <div className="">
                     <img className=" animate-bounce object-contain h-32 w-32" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=".." />

                  </div >
                  <div className="space-y-2 border rounded-md black mb-5 p-3 shadow-2xl" >
                        <p className="text-md font-semibold  text-white capitalize">{description}</p>
                        <p className="text-md font-semibold  text-white capitalize">Wind speed: {windspeed.speed}</p>
                        <p className="text-md font-semibold  text-white capitalize">Min Temp : {citytemp.temp}&deg;c</p>
                        <p className="text-md font-semibold  text-white capitalize">Max Temp : {citytemp.temp_max}&deg;c</p>
                        <p className="text-md font-semibold  text-white capitalize">humidity : {citytemp.humidity} %</p>
                  </div>
              </div>
         </div>
      </div>
  )
}

export default Weather