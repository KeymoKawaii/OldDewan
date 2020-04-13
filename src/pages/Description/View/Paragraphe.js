import React from 'react';
import './Paragraphe.css'

export default class ParagrapheFormation extends React.Component{
    render(){
        return(
            <article className="DescriptionDewan">
                <h2>Nous vous aidons à gérer les <strong>conflits</strong>, les <strong>situations de crise </strong>
                et la <strong>gestion des émotions</strong> dans votre quotidien.</h2>
                <h2>Nous développons des solutions digitales pour améliorer les <strong>postures
                 relationnelles et émotionnelles</strong> dans l’entreprise en travaillant sur les
                 facteurs clés des <strong>risques psychosociaux au travail</strong>.</h2>
            </article>
        );
    }
}