import { useState } from 'react'
import '../Main/main.css'
import ButtonContact from '../NavBar/ButtonContact/ButtonContact'
import Estudios from './Estudios/Estudios'
import Skills from './Skills/Skills'
import Perfil from './Perfil/Perfil'

const Main = () => {
    const [link, setLink] = useState("perfil")
    const perfil = ()=>{
        setLink("perfil")
      }
      const estudios = ()=>{
        setLink("estudios")
      }
      const skills = ()=>{
        setLink("skills")
      }
  return (
    <div className='main'>
    <div className='main__perfil'>

    </div>
    <div className='main__habilidades'>
    <h1>Sobre mi.</h1>
    <div className='main__habilidades__links'>
    <div className='main__hablidades__links__link'>
    <div className={link === "perfil" && "linkOn"}>
    <h3 onClick={()=>perfil()}>Perfil</h3>
    </div>
    <div className={link === "estudios" && "linkOn"}>
    <h3 onClick={()=>estudios()}>Estudios</h3>
    </div>
    <div className={link === "skills" && "linkOn"}>
    <h3 onClick={()=>skills()}>Skills</h3>
    </div>
    </div>
    <div className='main__hablidades__dinamico'>
    {
      link === "perfil" && (
        <>
        <Perfil />
        <div className='main__habilidades__dinamico__buttons'>
      <ButtonContact  text={"Escribeme"} />
      <ButtonContact text={"Descargar CV"} colorFondo={"yellow"} />
      </div>
        </>
        
      )
    }
    {
      link === "estudios" && <Estudios  />
    }
    {
      link === "skills" && <Skills link={link} />
    }
   
     

    </div>
    </div>
    </div>
    </div>
  )
}

export default Main