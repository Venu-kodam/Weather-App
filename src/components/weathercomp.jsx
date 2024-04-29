import React, { useEffect, useState } from 'react'
import Datalist from './datalist';

const Weathercomp = ({weatherdata}) => {
  const[currentdatetime,setCurrentdatetime] = useState(new Date())
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentdatetime(new Date())
    }, 1000);
    return()=>{clearInterval(interval)}
  },[])
  console.log(weatherdata);
  //object destructuring
  const{
    name:city,
    sys:{country},
    weather:[{description,icon}],
    wind:{speed},
    main:{humidity,temp}
  }=weatherdata

  //flags icons for flag icons search for flagicons@7.2.1
  const flag=`fi fi-${country.toLowerCase()} me-3 rounded fs-1`

  const items = [
    {
      src:"https://classroomclipart.com/image/content7/50871/thumb.gif",
      primary:`${Math.round(temp-273.15).toFixed()}°` //alt+0176 for degree symbol
    },
    {
      src:"https://lordicon.com/icons/wired/flat/447-water-drop.gif",
      primary:`${humidity}%`
    },
    {
      src:"https://lordicon.com/icons/wired/gradient/812-wind.gif",
      primary:`${speed.toFixed()}m/s`
    },
  ]
  return (
    <section className='container border border-white mt-3'>
      <div className="row" id='g1'>
      <span className='text-center fw-bold my-3 p-3 text-white'>{currentdatetime.toLocaleString()}</span>
      </div>
      
      <div className="row">
        <div className="d-flex align-items-center col-sm-12 col-md-4 col-lg-4 col-12">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <span className='fw-bold text-white fs-4'>{description}</span>
        </div>
        <div className="d-flex col-sm-12 col-md-4 col-lg-4 col-12 my-auto">
          <span className={flag}></span>
          <span className='fw-bold text-white fs-4'>{city}</span>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <Datalist items={items}/>
        </div>
      </div>
    </section>
  )
}

export default Weathercomp