import React from 'react'
import TarjetaPortfolio from './TarjetaPortfolio/TarjetaPortfolio'
import '../Portfolio/portfolio.css'
import TarjetaMobile from './TarjetaMobile/TarjetaMobile'
import TarjetaMobilev2 from './TarjetaMobilev2/TarjetaMobilev2'

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
    <TarjetaMobilev2 nombre={"Cascanueces saludable"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697119380/portafolio/habilidades/cascanueces_v3_qdofay.png"} demo={"https://cascanueces-ue9o.vercel.app/"} description={"e-comerce para una tienda de la cuidad de rosario, la cual contiene registro de usuarios, y un app independiente para agregar, editar o eliminar los productos"}/>
    <TarjetaMobilev2 nombre={"Dashboard cascanueces"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698090564/portafolio/dashboard_v2_tzlayr.png"} demo={"https://dashboard-cascanueces-saludable-admin-nacho.vercel.app/"} description={"App independiente a cascanueces saludable, en la que el admin puede agregar, editar o eliminar sus productos a su gusto y poder gestionar todo su stock"}/>
    <TarjetaMobilev2 nombre={"Compra gamer"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697122155/portafolio/habilidades/tienda_digital_v1_nuuv38.png"} demo={"https://tiendadigital.vercel.app/"} description={"e-comerce de una tienda de productos para gaming, en el que cualquier comprador puede agregar sus productos a un carrito y enviarle el pedido al local para gestionar su envio a domicilio"}/>
    <TarjetaMobilev2 nombre={"SpotyClon"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"}  description={"Clon de spotify, en el cual cada usuario puede agregar sus artitas preferidos, agregar albunes y canciones y tener una seccion de canciones favoritas"}/>  
    <TarjetaMobilev2 nombre={"El Clima"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698007104/portafolio/clima3_rwwmf0.png"}  demo={"https://app-del-clima-two.vercel.app/"} description={"App que nos devuelve el pronostico del tiempo actual y el de los próximos dias de cualquier cuidad del mundo"}/>
    
    </div>
    </div>
  )
}

export default Portfolio