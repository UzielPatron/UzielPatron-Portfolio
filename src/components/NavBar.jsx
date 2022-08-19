import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import '../stylesheets/NavBar.css';

export const NavBar = () => {
    
    const [ openMenu, setOpenMenu ] = useState( false );
    const [ isOpen, setIsOpen ] = useState( openMenu );
    const [ isClosing, setIsClosing ] = useState( false )

    const onOpenMenu = () => {
        setOpenMenu( true );
    }

    const onCloseMenu = () => {
        setOpenMenu( false );
    }

    
    useEffect(() => {

        if( !openMenu ){
            setIsClosing( true )
            setTimeout( () => setIsOpen( false ), 300)
        }
        else {
            setIsClosing( false );
            setIsOpen( true );
        }

        



    }, [ openMenu ]);
    

    return (
        <div className='navbar-container'>
            <h3 className="navbar-title">
                UZIEL PATRON
            </h3>
            <div className="navbar-links">
                <p><a href="#home" id='a-home' >Home</a></p>
                <p><a href="#technologies" id='a-technologies' >Tecnologías</a></p>
                <p><a href="#projects" id='a-projects' >Proyectos</a></p>
                <p><a href="#about" id='a-about-me' >Sobre Mí</a></p>
                
            </div>

            <div className="navbar-mobile">
                {
                    isOpen
                        ? (
                            <>
                                <FaTimes className={ `navbar-mobile-icon` } onClick={ onCloseMenu } />
                                <div className={ isClosing ? 'navbar-links-mobile-desaparecer' : 'navbar-links-mobile' } >
                                    <p><a href="#home" >Home</a></p>
                                    <p><a href="#technologies" >Tecnologías</a></p>
                                    <p><a href="#projects" >Proyectos</a></p>
                                    <p><a href="#about" >Sobre Mí</a></p>
                                    <a href="https://www.linkedin.com/in/uziel-patron-50a474227/" target="_BLANK">
                                        <FiLinkedin className='linkedin-icon-navbar navbar-icons' />
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=542473519714" target='_BLANK' >
                                        <BsWhatsapp className='whatsapp-icon-navbar navbar-icons'/>
                                    </a>
                                    <a href="mailto:uzielpatron2020@gmail.com?Subject=Quisiera%20ponerme%20en%20contacto%20contigo" target='_BLANK' >
                                        <HiMail className='email-icon navbar-icons' />
                                    </a>
                                    
                                </div>
                            </>
                        )
                        : <FaBars className='navbar-mobile-icon' onClick={ onOpenMenu } /> 
                }
            </div>
        </div>
    )
}
