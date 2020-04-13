import React from 'react';
import logoEddma from "../../../img/Logo-EDDMA-Dewan-Developpement-RVB.jpg";
import "./TextApp.css";

export default class TextApp extends React.Component{
    render(){
        return(
            <article className="Reponse">
                <p className="Paragraphe7">Nous avons conçu l'application <span>EDDMA</span> proposant des parcours d'introspection pour améliorer ses postures
                relationnelles et émotionnelles au quotidien dans l'entreprise. 
                <br />Chaque collaborateur devient actif et acteur de son développement et de ses aspirations professionnelles. <br />
                Il apprend à se connaître et autodiagnostique ses forces et ses faiblesses. <br />
                </p>
                <img src={logoEddma} alt="Logo de l'application EDDMA" />
            </article>
        )
    }
}