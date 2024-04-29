import React from 'react'
import Forecastitem from './forecastitem';
const Forecastlist = ({ forecastdata }) => {
  console.log(forecastdata);
  return (
    <>
    { forecastdata && forecastdata.list.map((item, index) => (
      <Forecastitem key={index} forecastdata={item} />
    ))}
    </>

  )
}

export default Forecastlist