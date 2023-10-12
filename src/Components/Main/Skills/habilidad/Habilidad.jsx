import React from 'react'
import '../habilidad/habilidad.css'

const Habilidad = ( {urlIcon, text} ) => {
  return (
    <div className='habilidad'>
    <img src={urlIcon}></img>
    <h1>{text}</h1>
    </div>
  )
}

export default Habilidad