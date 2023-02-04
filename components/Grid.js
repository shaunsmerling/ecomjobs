import React from 'react'

export default function Grid (props) {

    console.log(props.arrOfObj)

    const cells = props.arrOfObj.map((comp => 
      <div className="border-2 bg-sky-200 ">{comp}</div>

      
      ))
  
  return (

    <div className="grid">
      {cells}
    </div>
  )
}