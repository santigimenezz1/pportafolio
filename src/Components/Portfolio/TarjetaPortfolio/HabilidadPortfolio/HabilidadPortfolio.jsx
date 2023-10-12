import React from 'react'
import '../HabilidadPortfolio/habilidadPortfolio.css'
const HabilidadPortfolio = ( {text, urlHabilidad} ) => {
  return (
    <div className='habilidadPortfolio'>
    <img src={urlHabilidad}></img>
    <h2>{text}</h2>
    </div>
  )
}

export default HabilidadPortfolio