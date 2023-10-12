import React from 'react'
import TarjetaPortfolio from './TarjetaPortfolio/TarjetaPortfolio'
import '../Portfolio/portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
    <h1 className='portfolio__titulo'>Portafolio</h1>
    <div className='portfolio__tarjetas'>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697119380/portafolio/habilidades/cascanueces_v3_qdofay.png"} demo={"https://cascanueces-ue9o.vercel.app/"}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697122155/portafolio/habilidades/tienda_digital_v1_nuuv38.png"} demo={"https://tiendadigital.vercel.app/"} />
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"}  />
    <TarjetaPortfolio />
    <TarjetaPortfolio />
    <TarjetaPortfolio />

    </div>
    </div>
  )
}

export default Portfolio