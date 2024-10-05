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
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717519183/portafolio/Imagen_4-6-24_a_las_17.42_srqlk7.jpg"} demo={"https://dashboard-cascanueces.vercel.app"} nombre={"Dashboard Cascanueces saludable"} infoProyecto={"Proyecto para mi cliente Cascanueces saludable, donde puede manejar su stock. Teniendo la posibilidad de editar sus productos, agregar nuevos o eliminarlos."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717198809/portafolio/Imagen_1-6-24_a_las_1.33_vhjgol.jpg"}  demo={"https://peluditos-pi.vercel.app"} nombre={"Peluditos"} infoProyecto={"Descubre una aplicación donde puedes realizar búsquedas de imágenes y videos, con acceso a una amplia variedad de recursos. Explora y descarga tus imágenes favoritas con facilidad"}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1718008258/portafolio/Imagen_10-6-24_a_las_10.30_hcoayb.jpg"} demo={"https://cafe-aroma.vercel.app"} nombre={"Café Aroma"} infoProyecto={"Sumérgete en el aroma y sabor de nuestros cafés especiales, acompáñalos con deliciosos pasteles y disfruta de un ambiente acogedor y relajante. Un lugar perfecto para cualquier momento del día."}/>    
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717976956/portafolio/Captura_de_pantalla_2024-06-10_a_las_1.37.19_yjaatn.jpg"}  demo={"https://photosnap-kohl.vercel.app"} nombre={"Photo Snap"} infoProyecto={"Descubre una plataforma diseñada para fotógrafos y amantes de la fotografía, donde puedes explorar y adquirir imágenes cautivadoras para tu proyecto o colección personal. Sumérgete en el arte visual y encuentra la inspiración que necesitas para dar vida a tus ideas"}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075299/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.28.26_m2aae2.jpg"}  demo={"https://t-movies-phi.vercel.app/"} nombre={"TMovies"} infoProyecto={"aplicación web que utiliza la API de The Movie Database (TMDB). La interfaz ofrece búsquedas instantáneas, detalles completos de películas, información de reparto y, para series, una vista de temporadas y episodios. Desarrollado con Next.js,  para una experiencia de usuario ágil."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717976956/portafolio/Imagen_10-6-24_a_las_1.03_k5hiqc.jpg"}  demo={"https://fortafit-blush.vercel.app"} nombre={"FortaFit"} infoProyecto={"Explora nuestra selección de zapatillas deportivas diseñadas para ofrecerte rendimiento y estilo. Encuentra el par perfecto para llevar tu juego al siguiente nivel y destacar en cada paso que des."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075238/portafolio/Imagen_10-3-24_a_las_13.52_l7be3p.jpg"}  demo={"https://weather-wise-delta.vercel.app/"} nombre={"WeatherWise"} infoProyecto={"Proyecto que consume la api de Open Weather map, donde podemos buscar cualquier cuidad del mundo, agregarlas a una seccion de favoritos y obtener los datos climaticos del día y sus 5 dias posteriores."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717664389/portafolio/Imagen_6-6-24_a_las_10.56_wtdlhn.jpg"} demo={"https://tienda-digital.vercel.app"} nombre={"Gaming Store"} infoProyecto={"Tienda de productos gaming, los usuarios van a poder registarse, seleccionar los productos que quieran obtener y finalizar su compra."}  />
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717198986/portafolio/Imagen_1-6-24_a_las_1.41_wglbum.jpg"}  demo={"https://aura-rust.vercel.app"} nombre={"Aura Io"} infoProyecto={"Descubre nuestra extensa biblioteca de componentes listos para usar en tus proyectos de HTML y CSS. Encuentra todo lo que necesitas para dar vida a tus diseños web de manera rápida y sencilla. Simplifica tu proceso de desarrollo y crea sitios impresionantes con facilidad."}/>
    <TarjetaPortfolio urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700692085/portafolio/tu_historia_foto_2_ehwz9f.png"}  demo={"https://tu-historia.vercel.app/"} nombre={"TuHistoria.com"} infoProyecto={"App para compartir con la comunidad historia raras que te hayan pasado, pudiendo intercambiar ideas y agregar imagenes a nustras historias favoritos."}/>
    


    </div>

    <div className='portfolio__tarjetasMobile'>
    <TarjetaMobilev2 nombre={"Cascanueces saludable"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710074924/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.24.18_sl3awg.jpg"} demo={"https://cascanueces-saludable-store.vercel.app"} description={"e-comerce para una tienda de la cuidad de rosario, la cual contiene registro de usuarios, y un app independiente para agregar, editar o eliminar los productos"}/>
    <TarjetaMobilev2 nombre={"Dashboard cascanueces"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717519183/portafolio/Imagen_4-6-24_a_las_17.42_srqlk7.jpg"} demo={"https://dashboard-cascanueces.vercel.app"} description={"App independiente a cascanueces saludable, en la que el admin puede agregar, editar o eliminar sus productos a su gusto y poder gestionar todo su stock"}/>
    <TarjetaMobilev2 urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717198809/portafolio/Imagen_1-6-24_a_las_1.33_vhjgol.jpg"}  demo={"https://peluditos-pi.vercel.app"} nombre={"Peluditos"} description={"Descubre una aplicación donde puedes realizar búsquedas de imágenes y videos, con acceso a una amplia variedad de recursos. Explora y descarga tus imágenes favoritas con facilidad"}/>
    <TarjetaMobilev2 urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1718008258/portafolio/Imagen_10-6-24_a_las_10.30_hcoayb.jpg"} demo={"https://cafe-aroma.vercel.app"} nombre={"Café Aroma"} description={"Sumérgete en el aroma y sabor de nuestros cafés especiales, acompáñalos con deliciosos pasteles y disfruta de un ambiente acogedor y relajante. Un lugar perfecto para cualquier momento del día."}/>    
    <TarjetaMobilev2 urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717976956/portafolio/Captura_de_pantalla_2024-06-10_a_las_1.37.19_yjaatn.jpg"}  demo={"https://photosnap-kohl.vercel.app"} nombre={"Photo Snap"} description={"Descubre una plataforma diseñada para fotógrafos y amantes de la fotografía, donde puedes explorar y adquirir imágenes cautivadoras para tu proyecto o colección personal. Sumérgete en el arte visual y encuentra la inspiración que necesitas para dar vida a tus ideas"}/>
    <TarjetaMobilev2 nombre={"TMovies"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075299/portafolio/Captura_de_pantalla_2024-03-10_a_las_13.28.26_m2aae2.jpg"}  demo={"https://t-movies-phi.vercel.app/"} description={"App que consume la API TMDB para búsquedas, detalles de películas, reparto, y series con temporadas y episodios."}/>
    <TarjetaMobilev2 urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717976956/portafolio/Imagen_10-6-24_a_las_1.03_k5hiqc.jpg"}  demo={"https://fortafit-blush.vercel.app"} nombre={"FortaFit"} description={"Explora nuestra selección de zapatillas deportivas diseñadas para ofrecerte rendimiento y estilo. Encuentra el par perfecto para llevar tu juego al siguiente nivel y destacar en cada paso que des."}/>
    <TarjetaMobilev2 nombre={"WeatherWise"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710075238/portafolio/Imagen_10-3-24_a_las_13.52_l7be3p.jpg"}  demo={"https://weather-wise-delta.vercel.app/"} description={"App que nos devuelve el pronostico del tiempo actual y el de los próximos dias de cualquier cuidad del mundo"}/>
    <TarjetaMobilev2 nombre={"Compra Gamer"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710369290/Imagen_13-3-24_a_las_23.34_iaw2n6.jpg"} demo={"https://tienda-digital.vercel.app/"} description={"e-comerce de una tienda de productos para gaming, en el que cualquier comprador puede agregar sus productos a un carrito y enviarle el pedido al local para gestionar su envio a domicilio"}/>
    <TarjetaMobilev2 urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717198986/portafolio/Imagen_1-6-24_a_las_1.41_wglbum.jpg"}  demo={"https://aura-rust.vercel.app"} nombre={"Aura Io"} description={"Descubre nuestra extensa biblioteca de componentes listos para usar en tus proyectos de HTML y CSS. Encuentra todo lo que necesitas para dar vida a tus diseños web de manera rápida y sencilla. Simplifica tu proceso de desarrollo y crea sitios impresionantes con facilidad."}/>
    <TarjetaMobilev2 nombre={"TuHistoria.com"} urlImagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700692085/portafolio/tu_historia_foto_2_ehwz9f.png"}  demo={"https://tu-historia.vercel.app/"} description={"App para compartir con la comunidad historia raras que te hayan pasado, pudiendo intercambiar ideas y agregar imagenes a nustras historias favoritos."}/>
    </div>
    </div>
  )
}

export default Portfolio