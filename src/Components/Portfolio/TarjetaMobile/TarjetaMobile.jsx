import React from 'react'
import '../TarjetaMobile/tarjetaMobile.css'
import HabilidadPortfolio from '../TarjetaPortfolio/HabilidadPortfolio/HabilidadPortfolio'
import ButtonContact from '../../NavBar/ButtonContact/ButtonContact'

const TarjetaMobile = ({urlImagen, demo, codigo, description}) => {
  return (
    <div>
    <div class="myCardMobile">
        <div>
            <div className="frontSideMobile"> 
            <img className='frontSide__imagenMobile' src={urlImagen}></img>
            <div className='frontSideMobile__info'>
            <h1>Cascanueces Store</h1>
            <span className='description'>{description}</span>
             <div className='frontSideMobile__tecnologias'>
             <HabilidadPortfolio text={"CSS"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/html-5_q48xod.png"} />
             <HabilidadPortfolio text={"JavaScript"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
             <HabilidadPortfolio text={"React.js"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/js_gdrnrn.png"} />
             <HabilidadPortfolio text={"Figma"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
             </div>
             <div className='backSide__buttons'>
                <ButtonContact text={"Demo"} colorFondo={"yellow"} demo={demo} />
                <ButtonContact text={"Codigo"} colorFondo={"yellow"}/>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TarjetaMobile