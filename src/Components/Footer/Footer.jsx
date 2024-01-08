import React from 'react'
import '../Footer/footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ButtonContactFooter from './ButtonContactFooter/ButtonContactFooter';

const Footer = () => {
    let logo = "<Santi/>"
  return (
    <div className='footer'>
    <div className='container__footer'>
    <h1>{logo}</h1>
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
    <span>Trabajemos juntos | <div><ButtonContactFooter /></div></span>
    <span style={{fontSize:"14px", fontWeight:"600"}}>Frontend Developer - Web Designer</span>
    </div>
    </div>
    <div className='layout__social social__footer'>
    <a href='https://www.linkedin.com/in/santiago-gimenez-004253282/' target='blank'>  <LinkedInIcon className='icon__social' fontSize='large'/>  </a>
    <a href='https://github.com/santigimenezz1?tab=repositories' target='blank'> <GitHubIcon className='icon__social' fontSize='large' /> </a>
     </div>
    
    
    </div>
  )
}

export default Footer