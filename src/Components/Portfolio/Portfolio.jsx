import React from 'react'
import TarjetaPortfolio from './TarjetaPortfolio/TarjetaPortfolio'
import '../Portfolio/portfolio.css'
import TarjetaMobile from './TarjetaMobile/TarjetaMobile'

const Portfolio = () => {
  return (
    <div className='portfolio'>
    <h1 className='portfolio__titulo'>Portafolio</h1>
    <div className='portfolio__tarjetas'>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697119380/portafolio/habilidades/cascanueces_v3_qdofay.png"} demo={"https://cascanueces-ue9o.vercel.app/"}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697122155/portafolio/habilidades/tienda_digital_v1_nuuv38.png"} demo={"https://tiendadigital.vercel.app/"} />
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"}  />
    <TarjetaPortfolio />

 
    </div>

    <div className='portfolio__tarjetasMobile'>
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697119380/portafolio/habilidades/cascanueces_v3_qdofay.png"} demo={"https://cascanueces-ue9o.vercel.app/"}/>
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697122155/portafolio/habilidades/tienda_digital_v1_nuuv38.png"} demo={"https://tiendadigital.vercel.app/"} />
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"}  />
    </div>
    </div>
  )
}

export default Portfolio