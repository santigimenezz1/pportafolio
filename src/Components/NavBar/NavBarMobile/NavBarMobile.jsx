
import '../NavBarMobile/navBarMobile.css'
import Hamburguesa from './Hamburguesa/Hamburguesa'


const NavBarMobile = ( {setNavOn, scrollToSection, scrollPortafolio} ) => {
  let logo = "<Santi/>"
  
  const abrirMenu = ()=>{
    setNavOn(true)
  }
  
  return (
    <div className='navBarMobile'>
      <div className='navBar__logo'>
      <h1>{logo}</h1>
      </div>
      <div onClick={()=>abrirMenu()} className='navBar__enlaces'>
      <Hamburguesa abrirMenu={abrirMenu} />
      </div>
      </div>

  )
}

export default NavBarMobile