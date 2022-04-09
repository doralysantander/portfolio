import React from 'react'
import CV from '../assets/HV-DORALY-SANTANDER.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './../css/Cv.css';

const Cv=()=>{

    return (
        <div id="Container-CV">
            
            <div id="Container-Cv-Title">
                <h2>Hoja de Vida</h2>
            </div>
            <div id="Container-pdf">
                <p>Da click en el siguiente enlace para su descarga.</p>
                <a className='links-Cv' href={CV} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='iconos' icon={['fab', 'buffer']} />CV</a>
            </div>
            
            
        </div>
    )
}

export default Cv;