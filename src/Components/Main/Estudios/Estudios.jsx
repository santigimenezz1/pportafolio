import React from 'react'
import Cursos from './Cursos/Cursos'
import '../Estudios/estudios.css'

const Estudios = () => {
  return (
    <div className='estudios'>
      <Cursos text={"Carrera de desarrollo Frontend ReactJS - CODERHOUSE" } urlCurso={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710941959/portafolio/logo_coder_ljbfrx.jpg"} />
      <Cursos text={"Curso Next.js - CODERHOUSE"} urlCurso={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1710941959/portafolio/logo_coder_ljbfrx.jpg"} />
      <Cursos text={"Javascript avanzado - Bootcamp SOY HENRY"} urlCurso={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1703804227/portafolio/logoOG_r1lwkn.png"} />



      
     
    </div>
  )
}

export default Estudios