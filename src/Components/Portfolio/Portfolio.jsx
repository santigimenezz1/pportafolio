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
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698007104/portafolio/clima3_rwwmf0.png"}  demo={"https://app-del-clima-two.vercel.app/"}/>

 
    </div>

    <div className='portfolio__tarjetasMobile'>
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697119380/portafolio/habilidades/cascanueces_v3_qdofay.png"} demo={"https://cascanueces-ue9o.vercel.app/"} description={"e-comerce para una tienda de la cuidad de rosario, la cual contiene registro de usuarios, y un app independiente para agregar, editar o eliminar los productos"}/>
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697122155/portafolio/habilidades/tienda_digital_v1_nuuv38.png"} demo={"https://tiendadigital.vercel.app/"} description={"e-comerce de una tienda de productos para gaming, en el que cualquier comprador puede agregar sus productos a un carrito y enviarle el pedido al local para gestionar su envio a domicilio"}/>
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"}  description={"Clon de spotify, en el cual cada usuario puede agregar sus artitas preferidos, agregar albunes y canciones y tener una seccion de canciones favoritas"}/>  
    <TarjetaMobile urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698069483/portafolio/WhatsApp_Image_2023-10-23_at_10.56.58_d0ycus.jpg"}  demo={"https://app-del-clima-two.vercel.app/"}/>

    </div>
    </div>
  )
}

export default Portfolio