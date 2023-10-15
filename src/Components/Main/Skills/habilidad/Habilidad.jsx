import React from 'react'
import '../habilidad/habilidad.css'

const Habilidad = ( {urlIcon, text} ) => {
  return (
    <div className='habilidad__skill'>
    <img src={urlIcon}></img>
    <h2 className='habilidad__skill__titulo'>{text}</h2>
    </div>
  )
}

export default Habilidad