import React from 'react'
import '../Cursos/cursos.css'

const Cursos = ( {urlCurso, text} ) => {
  return (
    <div className='cursos'>
      <img src={urlCurso}></img>
      <h1>{text}</h1>
    </div>
  )
}

export default Cursos