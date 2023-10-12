import { useRef, useState } from 'react'
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
import Skills from './Components/Main/Skills/Skills'
import Estudios from './Components/Main/Estudios/Estudios'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'


function App() {
  const [link, setLink] = useState("perfil")
  const sectionRef = useRef(null)
  const portafolioRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollPortafolio = () => {
    portafolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
    <>
   
    <NavBar scrollToSection={scrollToSection} scrollPortafolio={scrollPortafolio} />
    
    <div className='layout'>
    <ParticlesBackground />
    <div className='layout__titulo'>
    <span>iHola! me llamo,</span>
    <h1>Santiago Gimenez</h1>
    <div className='layout__social__interactivo'>
    <div className='texto__interactivo__strings'>
    <Typewriter 
    options={{
      strings: ['Frontend developer', 'Web designer 😃'],
      autoStart: true,
      loop: true,
    }}
  />
    </div>

    <div className='layout__social'>
    <a href='https://www.linkedin.com/in/santiago-gimenez-004253282/' target='blank'>  <LinkedInIcon className='icon__social' fontSize='large'/>  </a>
    <a href='https://github.com/santigimenezz1?tab=repositories' target='blank'> <GitHubIcon className='icon__social' fontSize='large' /> </a>
    
    <TwitterIcon className='icon__social' fontSize='large' />
    </div>
    <div className='layout__titulo__buttonDown'>
    <div onClick={()=>scrollToSection()}>
    <ArrowDownwardIcon fontSize='large'  />
    </div>
    </div>
    </div>
    </div>
    
    </div>
    <section ref={sectionRef} className='main'>
      <div className='main__perfil'>

      </div>
      <div className='main__habilidades'>
      <h1>Sobre mi.</h1>
      <div className='main__habilidades__links'>
      <div className='main__hablidades__links__link'>
      <div className={link === "perfil" && "linkOn"}>
      <h2 onClick={()=>perfil()}>Perfil</h2>
      </div>
      <div className={link === "estudios" && "linkOn"}>
      <h2 onClick={()=>estudios()}>Estudios</h2>
      </div>
      <div className={link === "skills" && "linkOn"}>
      <h2 onClick={()=>skills()}>Skills</h2>
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
    </section>


    <section ref={portafolioRef} className='proyectos'>
    <Portfolio  />
    </section>
    <footer className='footer'>
      <Footer />
    </footer>
    
    </>
  )
}

export default App
