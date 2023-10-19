import { useRef, useState } from 'react'
import './App.css'
import ParticlesBackground from './Components/ParticlesBackground'
import NavBar from './Components/NavBar/NavBar'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import '../src/MediaQuery.css'
import NavBarMobile from './Components/NavBar/NavBarMobile/NavBarMobile'
import EnlacesMobile from './Components/NavBar/NavBarMobile/EnlacesMobile/EnlacesMobile'


function App() {
  const sectionRef = useRef(null)
  const portafolioRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollPortafolio = () => {
    portafolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [navOn, setNavOn] = useState(false)
   

  return (
            <div>
            
            {
              navOn ? 
              <EnlacesMobile  setNavOn={setNavOn} scrollPortafolio={scrollPortafolio} scrollToSection={scrollToSection}/>
              :(
                <>
                <NavBar  scrollToSection={scrollToSection} scrollPortafolio={scrollPortafolio} />
                <NavBarMobile setNavOn={setNavOn} scrollToSection={scrollToSection} scrollPortafolio={scrollPortafolio} />
                <div style={{overflowX:"hidden", overflowY:"hidden"}} className='layout'>
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
                </>
              )
            }
            {
            
            }
            </div>
       
     

  )
}

export default App
