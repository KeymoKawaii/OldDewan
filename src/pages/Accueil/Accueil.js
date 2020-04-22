import React from "react";
import Logo from '../../img/Logo-Dewan-Developpement-RVB.jpg';
import "./Accueil.css"

export default class Head extends React.Component{
    
    render(){
        return(
            // Header de la page, division de chaque page partie en div, pour leur appliquer un background-image
            // Insertion de 2 titres intégré dans le bandeau et ajout de l'ancre pour la section en dessous
                <div className="FirstPage">
                    <img src={Logo} alt="Logo de Dewan Développement" />
                </div>
        );
    }
}