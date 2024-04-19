import React from 'react'
import TarjetaPortfolio from './TarjetaPortfolio/TarjetaPortfolio'
import '../Portfolio/portfolio.css'
import TarjetaMobile from './TarjetaMobile/TarjetaMobile'
import TarjetaMobilev2 from './TarjetaMobilev2/TarjetaMobilev2'
import TarjetaPortfolioProceso from './TarjetaPortfolioProceso/TarjetaPortfolioProceso'

const Portfolio = () => {
  return (
    <div className='portfolio'>
    <h1 className='portfolio__titulo'>Portafolio</h1>
    <div className='portfolio__tarjetas'>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710074924/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.24.18_sl3awg.jpg"} demo={"https://cascanueces-saludable-store.vercel.app"} nombre={"Cascanueces saludable"} infoProyecto={"Proyecto realizado para una tienda local de mi cuidad Rosario, Santa fe. E-comerce donde cada usuario puede registrarse, realizar sus pedidos, guardar sus productos favoritos y llevar un registro de sus pedidos."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1711025187/portafolio/Imagen_21-3-24_a_las_13.44_nxcamy.jpg"} demo={"https://dashboard-cascanueces.vercel.app/"} nombre={"Dashboard Cascanueces saludable"} infoProyecto={"Proyecto para mi cliente Cascanueces saludable, donde puede manejar su stock. Teniendo la posibilidad de editar sus productos, agregar nuevos o eliminarlos."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710369290/Imagen_13-3-24_a_las_23.34_iaw2n6.jpg"} demo={"https://tienda-digital.vercel.app"} nombre={"Gaming Store"} infoProyecto={"Tienda de productos gaming, los usuarios van a poder registarse, seleccionar los productos que quieran obtener y finalizar su compra."}  />
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"} demo={"https://tiendadigital.vercel.app/"} nombre={"Clon de Spotify"} infoProyecto={"Proyecto que replica la experiencia de usuario y diseño de spotify. Cada usuario puede agregar sus artistas favoritos, crear albumnes y agregar a una coleccion sus canciones favoritas."}  />
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075238/portafolio/Imagen_10-3-24_a_las_13.52_l7be3p.jpg"}  demo={"https://weather-wise-delta.vercel.app/"} nombre={"WeatherWise"} infoProyecto={"Proyecto que consume la api de Open Weather map, donde podemos buscar cualquier cuidad del mundo, agregarlas a una seccion de favoritos y obtener los datos climaticos del día y sus 5 dias posteriores."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075299/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.28.26_m2aae2.jpg"}  demo={"https://t-movies-phi.vercel.app/"} nombre={"TMovies"} infoProyecto={"aplicación web que utiliza la API de The Movie Database (TMDB). La interfaz ofrece búsquedas instantáneas, detalles completos de películas, información de reparto y, para series, una vista de temporadas y episodios. Desarrollado con Next.js,  para una experiencia de usuario ágil."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700692085/portafolio/tu_historia_foto_2_ehwz9f.png"}  demo={"https://tu-historia.vercel.app/"} nombre={"TuHistoria.com"} infoProyecto={"App para compartir con la comunidad historia raras que te hayan pasado, pudiendo intercambiar ideas y agregar imagenes a nustras historias favoritos."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710072446/portafolio/Imagen_10-3-24_a_las_13.01_thwuuf.jpg"}  demo={"https://stock-de-fotografia.vercel.app"} nombre={"Stock de fotos"} infoProyecto={"Descubre una aplicación donde puedes realizar búsquedas de imágenes y videos, con acceso a una amplia variedad de recursos. Explora y descarga tus imágenes favoritas con facilidad"}/>
    </div>

    <div className='portfolio__tarjetasMobile'>
    <TarjetaMobilev2 nombre={"Cascanueces saludable"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710074924/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.24.18_sl3awg.jpg"} demo={"https://cascanueces-saludable.vercel.app/"} description={"e-comerce para una tienda de la cuidad de rosario, la cual contiene registro de usuarios, y un app independiente para agregar, editar o eliminar los productos"}/>
    <TarjetaMobilev2 nombre={"Dashboard cascanueces"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1711025187/portafolio/Imagen_21-3-24_a_las_13.44_nxcamy.jpg"} demo={"https://dashboard-cascanueces.vercel.app/"} description={"App independiente a cascanueces saludable, en la que el admin puede agregar, editar o eliminar sus productos a su gusto y poder gestionar todo su stock"}/>
    <TarjetaMobilev2 nombre={"Compra Gamer"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710369290/Imagen_13-3-24_a_las_23.34_iaw2n6.jpg"} demo={"https://tienda-digital.vercel.app/"} description={"e-comerce de una tienda de productos para gaming, en el que cualquier comprador puede agregar sus productos a un carrito y enviarle el pedido al local para gestionar su envio a domicilio"}/>
    <TarjetaMobilev2 nombre={"SpotyClon"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697134008/portafolio/habilidades/spotyclon_qognsi.png"}  description={"Clon de spotify, en el cual cada usuario puede agregar sus artitas preferidos, agregar albunes y canciones y tener una seccion de canciones favoritas"}/>  
    <TarjetaMobilev2 nombre={"WeatherWise"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075238/portafolio/Imagen_10-3-24_a_las_13.52_l7be3p.jpg"}  demo={"https://weather-wise-delta.vercel.app/"} description={"App que nos devuelve el pronostico del tiempo actual y el de los próximos dias de cualquier cuidad del mundo"}/>
    <TarjetaMobilev2 nombre={"TMovies"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075299/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.28.26_m2aae2.jpg"}  demo={"https://t-movies-phi.vercel.app/"} description={"App que consume la API TMDB para búsquedas, detalles de películas, reparto, y series con temporadas y episodios."}/>
    <TarjetaMobilev2 nombre={"TuHistoria.com"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700692085/portafolio/tu_historia_foto_2_ehwz9f.png"}  demo={"https://tu-historia.vercel.app/"} description={"App para compartir con la comunidad historia raras que te hayan pasado, pudiendo intercambiar ideas y agregar imagenes a nustras historias favoritos."}/>
    <TarjetaMobilev2 nombre={"Stock de fotos"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710072446/portafolio/Imagen_10-3-24_a_las_13.01_thwuuf.jpg"}  demo={"https://tu-historia.vercel.app/"} description={"Descubre una aplicación donde puedes realizar búsquedas de imágenes y videos, con acceso a una amplia variedad de recursos. Explora y descarga tus imágenes favoritas con facilidad"}/>

    </div>
    </div>
  )
}

export default Portfolio