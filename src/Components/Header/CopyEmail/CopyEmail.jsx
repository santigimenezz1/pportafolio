import React from 'react';
import BotonCopy from './BotonCopy/BotonCopy';
import '../CopyEmail/copy.css'

const CopyEnail = () => {
  const email = 'santiago.manuel.gimenez97@gmail.com';

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    alert('Dirección de correo copiada al portapapeles: ' + email);
  };

  return (
    <div className='container__email'>
        <div className='container__email__texto'>
          <h3>Santidev@gmail.com</h3>
        </div>
    <BotonCopy copiarEmail={copiarEmail}/>
    </div>
  );
};

export default CopyEnail;
