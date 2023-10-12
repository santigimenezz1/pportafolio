import React, { useState } from 'react'
import '../ButtonContact/buttonContact.css'

const ButtonContact = ( {colorFondo, text} ) => {
 const [color, setColor] = useState(colorFondo)
  return (
    <div>
    {
      color !== "yellow" ?
      <a class="btn" href="#">{text}</a>
      :
      <a class=" yellow" href="#">{text}</a>

    }
    </div>
  )
}

export default ButtonContact