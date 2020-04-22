import React from "react";
import arrow from "../../img/arrow.svg"
import "./Accueil.css"

export default class Head extends React.Component{
    
    render(){
        return(
            // Header de la page, division de chaque page partie en div, pour leur appliquer un background-image
            // Insertion de 2 titres intégré dans le bandeau et ajout de l'ancre pour la section en dessous
            <header> 
            <h1><span className="Dewan">DEWAN</span>
            <span className="Icone">
                <hr className="Lexterieux"/>
                <hr className="LMillieu"/>
                <hr className="Lexterieux"/>
            </span>
            <span className="slogan">La relation à <br />votre avantage</span></h1>
            
                <img src={arrow} alt="Icone de flèche" />
            
        </header>
        );
    }
}