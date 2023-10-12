import React from 'react'
import '../Footer/footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    let logo = "<Santi/>"
  return (
    <>
    <div className='container__footer'>
    <h1>{logo}</h1>
    <span>Trabajemos juntos <button className='footer__button'>contactame aquí</button></span>
    </div>
    
    <div className='layout__social social__footer'>
    <a href='https://www.linkedin.com/in/santiago-gimenez-004253282/' target='blank'>  <LinkedInIcon className='icon__social' fontSize='large'/>  </a>
    <a href='https://github.com/santigimenezz1?tab=repositories' target='blank'> <GitHubIcon className='icon__social' fontSize='large' /> </a>
     </div>
    
    </>
  )
}

export default Footer