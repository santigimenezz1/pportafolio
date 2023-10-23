import ButtonContact from '../../NavBar/ButtonContact/ButtonContact'
import '../TarjetaMobilev2/tarjetaMobilev2.css'
import HabilidadPortfolio from '../TarjetaPortfolio/HabilidadPortfolio/HabilidadPortfolio'
const TarjetaMobilev2 = ( {nombre, urlImagen, demo, description} ) => {
  return (
    <div className='tarjetaMobilev2'>
    <div className='tarjetaMobilev2__imagen'>
    <img src={urlImagen}></img>
    </div>
    <div className='tarjetaMobilev2__info'>
    <h1>{nombre}</h1>
    <div className='tarjetaMobile2__info__habilidades'>
    <HabilidadPortfolio text={"CSS"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/html-5_q48xod.png"} />
    <HabilidadPortfolio text={"JavaScript"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
    <HabilidadPortfolio text={"React.js"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/js_gdrnrn.png"} />
    <HabilidadPortfolio text={"Figma"} urlHabilidad={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
    </div>
    <span className='tarjetaMobile2__info__habilidades__span'>
    {description}
    </span>
    <div className='tarjetaMobile2__info__habilidades__buttons'>
    <ButtonContact text={"Demo"} colorFondo={"yellow"} demo={demo}  />
    <ButtonContact text={"Codigo"} colorFondo={"yellow"} />
    </div>
    </div>
    </div>
  )
}

export default TarjetaMobilev2