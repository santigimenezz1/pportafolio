import React from 'react'
import '../Cursos/cursos.css'

const Cursos = ( {urlCurso, text} ) => {
  return (
    <div className='cursos'>
      <img src={urlCurso}></img>
      <div className='container__textCurso'>
      <h4>{text}</h4>
      </div>
    </div>
  )
}

export default Cursos