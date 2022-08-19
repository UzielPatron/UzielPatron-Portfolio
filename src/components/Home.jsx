import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import '../stylesheets/Home.css';
import miFoto from '../resources/foto.png';
import iconNext from '../resources/next.png';
import iconBottom from '../resources/bottom.png';


const onToBottomIcon = () => {
    document.getElementById( 'a-technologies' ).click();
}


export const Home = () => {
    
    
    

    return (
        <div className='home-container--before' >
            <div className="home-container" id='home'>
                <div className='home-divider-text'>
                    <div className="home-divider-text-blur">
                        <h1 className='home-title'>Bienvenido a mi portafolio</h1>
                        <p className='home-p'>Mi nombre es Uziel Patron, soy <b>Desarrollador Frontend con React.js</b>. Me considero una persona proactiva y en constante búsqueda de nuevos retos que afrontar.</p>
                    </div>
                    <div className="home-contact-links">
                        <a href="mailto:uzielpatron2020@gmail.com?Subject=Quisiera%20ponerme%20en%20contacto%20contigo" target='_BLANK' >
                            <button className='home-contact-button'>Contactame<img src={ iconNext }/><img src={ iconNext }/><img src={ iconNext }/></button>
                        </a>
                    
                        <a href="https://www.linkedin.com/in/uziel-patron-50a474227/" target="_BLANK">
                            <FiLinkedin className='linkedin-icon home-icons' />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=542473519714" target='_BLANK' >
                            <BsWhatsapp className='whatsapp-icon home-icons'/>
                        </a>
                        <a href="mailto:uzielpatron2020@gmail.com?Subject=Quisiera%20ponerme%20en%20contacto%20contigo" target='_BLANK' >
                            <HiMail className='email-icon home-icons' />
                        </a>
                    </div>
                    
                </div>
                <div className="home-divider-photo">
                    <img src={ miFoto } alt="Uziel Patron" className='home-photo' />
                </div>
            </div>
            <img src={ iconBottom } alt='Go To Bottom' className='icon-bottom' onClick={ onToBottomIcon }/>
            
        </div>
  )
}
