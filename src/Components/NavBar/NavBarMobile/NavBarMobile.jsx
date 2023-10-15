
import ButtonContact from '../ButtonContact/ButtonContact'
import '../NavBarMobile/navBarMobile.css'
import Hamburguesa from './Hamburguesa/Hamburguesa'


const NavBarMobile = ( {scrollToSection, scrollPortafolio} ) => {
  let logo = "<Santi/>"
  
  return (
    <div className='navBar'>
      <div className='navBar__logo'>
      <h1>{logo}</h1>
      </div>
      <div className='navBar__enlaces'>
       <Hamburguesa />
      </div>
    </div>
  )
}

export default NavBarMobile