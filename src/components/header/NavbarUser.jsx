
import '../header/header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
function NavbarUser() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return(
        <header>
            <div className='container'>
                <nav className='navbar' id="navbar">
                        <img className='logoimg' src="./images/intress_logo_transparente.png" alt="Intress"/>
                    <div data-aos="fade-up">   
                    <ul className="nav-links">        
                        <input type="checkbox" id="checkbox_toggle" />    
                        <label for="checkbox_toggle" className="hamburger">&#9776;</label>  
                        <div className="menu">   
                            <li><a className='option' href="#personal">Perfil</a></li>
                            <li><a className='option' href="#selecusuario">Talleres</a></li>
                            <li><a className='option' href="#signin">Fichaje</a></li>
                            <li><a className='option' href="#holidays">Vacaciones</a></li>  
                            <li><a className='option' href="#doc">Documentos</a></li>  
                        </div>    
                    </ul> 
                    </div>    
                </nav>
            </div>
        </header>
    )
}  

export default NavbarUser;