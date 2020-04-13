import React from 'react';
import GM from '../../../img/mail.svg';
import TEL from '../../../img/phone.svg';
import PIN from '../../../img/pin.svg'
import "./TextCoord.css"

export default class TextCoord extends React.Component{
    render(){
        return(
            <div className="TextCoord">
                <h3>Contactez-nous !</h3>
                <hr/>
                <div>
                <img src={PIN} alt="Icone Point de Carte" /><p>2 Rue  de la Mabilais 35000 Rennes</p>
                </div>
                <div>
                <a href="mailto:contactdewan@dewandev.com"><img src={GM} alt="Logo de Gmail" /></a>
                <p>contactdewan@dewandev.com</p>
                </div>
                <div>
                <img src={TEL} alt="Logo de Téléphone" /><p>06.45.83.47.09</p>
                </div>
            </div>
        )
    }
}