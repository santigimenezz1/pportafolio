import React from 'react'
import Habilidad from './habilidad/Habilidad'
import '../Skills/skills.css'

const Skills = () => {
  return (
    <div className='container__skills'>
      <h3 className='titulo__skills'>Frontend</h3>
    <div className='skills'>
    <Habilidad text={"HTML"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/html-5_q48xod.png"} />
    <Habilidad text={"CSS"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/css-3_yyld3w.png"} />
    <Habilidad text={"JavaScript"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697115849/portafolio/habilidades/js_gdrnrn.png"} />
    <Habilidad text={"ReactJS"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697138521/portafolio/habilidades/icons8-reaccionar-400_nejrwl.png"} />
    <Habilidad text={"Next.js"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697138337/portafolio/habilidades/19baddb70a54d3bf34d781435cdcf1d7733ac81c-1024x1024_s7fmjo.svg"} />
    <Habilidad text={"Sass"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697138338/portafolio/habilidades/icons8-sass-48_dinepr.png"} />
    <Habilidad text={"Firebase"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697138646/portafolio/habilidades/icons8-firebase-240_znxaxa.png"} />
    <Habilidad text={"Figma"} urlIcon={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697138781/portafolio/habilidades/icons8-figma-240_azlggw.png"} />
    </div>
    </div>
  )
}

export default Skills