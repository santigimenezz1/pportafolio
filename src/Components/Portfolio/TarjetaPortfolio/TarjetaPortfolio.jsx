import React from 'react'
import '../TarjetaPortfolio/tarjetaPortfolio.css'
import Habilidad from '../../Main/Skills/habilidad/Habilidad'
import HabilidadPortfolio from './HabilidadPortfolio/HabilidadPortfolio'
import ButtonContact from '../../NavBar/ButtonContact/ButtonContact'

const TarjetaPortfolio = ({nombre, infoProyecto, urlImagen, demo, codigo}) => {
  return (
    <div>
    <div class="myCard">
        <div class="innerCard">
            <div class="frontSide"> 
            <img className='frontSide__imagen' src={urlImagen}></img>
            </div>
            <div className="backSide">
                <h1>{nombre}</h1>
                <div className='backSide__tecnologias'>
                <HabilidadPortfolio text={"CSS"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/html-5_q48xod.png"} />
                <HabilidadPortfolio text={"JavaScript"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
                <HabilidadPortfolio text={"React.js"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/js_gdrnrn.png"} />
                <HabilidadPortfolio text={"Figma"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
                </div>
                <div className='backside__infoProyecto'>
                  <span>{infoProyecto}</span>

                </div>
                <div className='backSide__buttons'>
                <ButtonContact text={"Demo"} colorFondo={"yellow"} demo={demo} />
                <ButtonContact text={"Codigo"} colorFondo={"yellow"}/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TarjetaPortfolio