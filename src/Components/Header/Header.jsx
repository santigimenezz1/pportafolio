import '../Header/header.css'
import Typewriter from 'typewriter-effect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ButtonContact from '../NavBar/ButtonContact/ButtonContact';
import CopyEmail from './CopyEmail/CopyEmail';



const Header = ( {scrollToSection} ) => {




  return (
    <div>
    <div className='layout__titulo'>
    <span>iHola! me llamo,</span>
    <h1>Santiago Gimenez</h1>
    <div className='layout__social__interactivo'>
    <div className='texto__interactivo__strings'>
    <Typewriter 
    options={{
      strings: ['Frontend developer', 'Web designer'],
      autoStart: true,
      loop: true,
    }}
  />
    </div>
    <div className='layout__social'>
    <a href='https://www.linkedin.com/in/santiago-gimenez-004253282/' target='blank'>  <LinkedInIcon className='icon__social' fontSize='large'/>  </a>
    <a href='https://github.com/santigimenezz1?tab=repositories' target='blank'> <GitHubIcon className='icon__social' fontSize='large' /> </a>
    
    </div>
    <div className='layout__titulo__buttonDown'>
    <div onClick={()=>scrollToSection()}>
    <ArrowDownwardIcon fontSize='large'  />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Header