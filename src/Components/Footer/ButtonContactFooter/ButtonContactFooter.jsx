import '../ButtonContactFooter/buttonContactFooter.css'
const ButtonContactFooter = () => {

  const handleContactClick = () => {
    const email = 'santiago.manuel.gimenez97@gmail.com';

    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };
  return (
    <button onClick={()=>handleContactClick()} className='button__footer'>
     Contactame aquí
    </button>
  )
}

export default ButtonContactFooter