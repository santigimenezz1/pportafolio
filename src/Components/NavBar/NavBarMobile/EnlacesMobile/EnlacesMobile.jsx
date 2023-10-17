import ButtonContact from '../../ButtonContact/ButtonContact'
import '../EnlacesMobile/enlacesMobile.css'
function EnlacesMobile( {setNavOn} ) {
  const cerrarMenu = ()=>{
    setNavOn(false)
  }
  return (
    <div className='enlacesMobile'>
    <div className='enalcesMobile__escape'>
    <h1 onClick={()=>cerrarMenu()}>X</h1>
    </div>
    <div className='enlacesMobile__buttons'>
    <ul>
    <li  className='enalcesMobile__buttons__button'>Sobre mi</li>
    <li className='enalcesMobile__buttons__button'>Portfolio</li>  
    <div style={{display:"flex", justifyContent:"center"}}>
    <ButtonContact text={"Contactame"} />   
    </div>
   </ul>
    </div>
      
    </div>
  )
}

export default EnlacesMobile
