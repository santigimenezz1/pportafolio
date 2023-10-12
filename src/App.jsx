import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticlesBackground from './Components/ParticlesBackground'
import NavBar from './Components/NavBar/NavBar'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from 'typewriter-effect';
import TwitterIcon from '@mui/icons-material/Twitter';
import ButtonContact from './Components/NavBar/ButtonContact/ButtonContact'
import Perfil from './Components/Main/Perfil/Perfil'


function App() {
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
let arreglo = ['Frontend developer', 'Web designer']

  return (
    <>
    <div className='layout'>
    <ParticlesBackground />
    <NavBar />
    <div className='layout__titulo'>
    <span>iHola! me llamo,</span>
    <h1>Santiago Gimenez</h1>
    <div className='layout__social__interactivo'>
    <div className='texto__interactivo__strings'>
    <Typewriter 
    options={{
      strings: ['Frontend developer', 'Web designer : )'],
      autoStart: true,
      loop: true,
    }}
  />
    </div>

    <div className='layout__social'>
    <LinkedInIcon className='icon__social' fontSize='large'/>
    <GitHubIcon className='icon__social' fontSize='large' />
    <TwitterIcon className='icon__social' fontSize='large' />
    </div>
    <div className='layout__titulo__buttonDown'>
    <ArrowDownwardIcon fontSize='large'  />
    </div>
    </div>
    </div>
    
    </div>
    <section className='main'>
      <div className='main__perfil'>

      </div>
      <div className='main__habilidades'>
      <h1>Sobre mi.</h1>
      <div className='main__habilidades__links'>
      <div className='main__hablidades__links__link'>
      <h2 onClick={()=>perfil()}>Perfil</h2>
      <h2 onClick={()=>estudios()}>Estudios</h2>
      <h2 onClick={()=>skills()}>Skills</h2>
      </div>
      <div className='main__hablidades__dinamico'>
      {
        link === "perfil" && <Perfil />
      }
      {
        link === "estudios" && <h2>estudios</h2>
      }
      {
        link === "skills" && <h2>skills</h2>
      }
     
        <div className='main__habilidades__dinamico__buttons'>
        <ButtonContact  text={"Escribeme"} />
        <ButtonContact text={"Descargar CV"} colorFondo={"yellow"} />
        </div>

      </div>
      </div>
      </div>
    </section>


    <section className='proyectos'>
    <h1 style={{fontSize:"80px", color:"rgb(255, 0, 191)"}}>Portafolio</h1>
    </section>
    </>
  )
}

export default App
