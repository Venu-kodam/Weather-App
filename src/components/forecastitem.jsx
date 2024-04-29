import React from 'react'
import Datalist from './datalist';

const Forecastitem = ({ forecastdata }) => {
  console.log(forecastdata);
  const {
    dt,
    temp,
    humidity,
    speed,
    weather: { icon, description },
  } = forecastdata
  //writing the day format
  const day = new Date(dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
  const items = [
    {
      src: "https://classroomclipart.com/image/content7/50871/thumb.gif",
      // primary: `${temp.min.toFixed()-273.15}°`, //alt+0176 for degree symbol
      primary:`${Math.round(temp.min-273.15)}°`,
      secondary: `${Math.round(temp.max-273.15)}°`
    },
    {
      src: "https://lordicon.com/icons/wired/flat/447-water-drop.gif",
      primary: `${humidity}`
    },
    {
      src: "https://lordicon.com/icons/wired/gradient/812-wind.gif",
      primary: `${speed.toFixed()}m/s`
    },
  ]
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0 shadow" >
        <div className="card mx-2 my-2 " style={{ width: '190px' }} id='g1'>
          <div className="card-body">
            <h5 className="card-title text-center text-white">{day}</h5>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <p className='fw-bold'>{description}</p>
            <Datalist items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecastitem