import React, { useState } from 'react'
import '../ButtonContact/buttonContact.css'

const ButtonContact = ( {colorFondo, text} ) => {
 const [color, setColor] = useState(colorFondo)
 const email = 'santiago.manuel.gimenez97@gmail.com';

 const handleContactClick = () => {
  const mailtoLink = `mailto:${email}`;
  window.location.href = mailtoLink;
};
  return (
    <div>
    {
      color !== "yellow" ?
      <button onClick={()=>handleContactClick()} className='btn'>{text}</button>
      :
      <a class=" yellow" href="#">{text}</a>

    }
    </div>
  )
}

export default ButtonContact