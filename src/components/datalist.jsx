import React from 'react'
import Dataitem from './dataitem'

const Datalist = ({items}) => {
  return (
    <ul className="list-group list-group-flush">
        {items.map((item,index)=>(
            <Dataitem key={index} {...item}/>
        ))}
    </ul>
  )
}

export default Datalist