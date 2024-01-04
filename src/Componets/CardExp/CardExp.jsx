import React from 'react'
import './CardExp.css'

const CardExp = (props) => {
  return (

    <div className="mainexp">
      <div className='imgExp'>
        <img src={props.imgg} alt="" />
      </div>

      <div className="contentexp">
        <div className="cont">
        <h2 >{props.title}</h2>
        <h1>{props.para}</h1>
        <button>View Packages</button>
        </div>
      
      </div>

    </div>
  )
}

export default CardExp