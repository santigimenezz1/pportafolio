import { useRef } from 'react'
import './App.css'
import ParticlesBackground from './Components/ParticlesBackground'
import NavBar from './Components/NavBar/NavBar'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import '../src/MediaQuery.css'
import NavBarMobile from './Components/NavBar/NavBarMobile/NavBarMobile'


function App() {
  const sectionRef = useRef(null)
  const portafolioRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollPortafolio = () => {
    portafolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className='container__app'>
    <div className='navBarOff'>
    <NavBar scrollToSection={scrollToSection} scrollPortafolio={scrollPortafolio} />
    </div>
    <div className='navBarMobileOff'>
    <NavBarMobile scrollToSection={scrollToSection} scrollPortafolio={scrollPortafolio} />
    </div>

    <div className='layout'>
    <ParticlesBackground />
    <Header scrollToSection={scrollToSection} />
    </div>

    <section ref={sectionRef} className='main'>
    <Main />
    </section>


    <section ref={portafolioRef} className='proyectos'>
    <Portfolio  />
    </section>

    <footer className='footer'>
      <Footer />
    </footer>
    
    </div>
  )
}

export default App
