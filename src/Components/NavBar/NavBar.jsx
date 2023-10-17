import '../NavBar/navBar.css'
import ButtonContact from './ButtonContact/ButtonContact'

const NavBar = ( {scrollToSection, scrollPortafolio} ) => {
  let logo = "<Santi/>"
  
  return (
    <>
    <div className='navBar'>
      <div className='navBar__logo'>
      <h1>{logo}</h1>
      </div>
      <div className='navBar__enlaces'>
        <ul>
         <li onClick={()=>scrollToSection()}>Sobre mi</li>
         <li onClick={()=>scrollPortafolio()}>Portfolio</li>  
         <li> <ButtonContact text={"Contactame"} /></li>    
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar