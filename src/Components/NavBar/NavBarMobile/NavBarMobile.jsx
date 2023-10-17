
import { useState } from 'react'
import '../NavBarMobile/navBarMobile.css'
import EnlacesMobile from './EnlacesMobile/EnlacesMobile'
import Hamburguesa from './Hamburguesa/Hamburguesa'


const NavBarMobile = ( {scrollToSection, scrollPortafolio} ) => {
  let logo = "<Santi/>"
  const [navBarOn, setNavBarOn] = useState(false)
  
  const abrirMenu = ()=>{
    setNavBarOn(!navBarOn)
  }
  return (
    <>
    <div className='navBarMobile'>
      <div className='navBar__logo'>
      <h1>{logo}</h1>
      </div>
      <div className='navBar__enlaces'>
      <Hamburguesa abrirMenu={abrirMenu} />
      </div>
      </div>
      
    
    </>
  )
}

export default NavBarMobile