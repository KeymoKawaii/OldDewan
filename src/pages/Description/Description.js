import React from 'react';
import PhotoTexte from './View/PhotoTexte';
import ParagrapheFormation from './View/Paragraphe';
import Slidemots from './View/SlideMot';
import './Description.css'

export default class Formation extends React.Component{
    render(){
        return(
            <section className="Formation" id="Description">
            <ParagrapheFormation />
            <PhotoTexte />
            <Slidemots 
                Mot1="Situation Conflictuelle"
                Mot2="Insécurité"
                Mot3="Exigence émotionnelle"
                Mot4="Leadership"
                Mot5="Changement"
                Mot6="Management"
                />
            </section>
        );
    }
}