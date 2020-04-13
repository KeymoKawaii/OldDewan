import React from 'react';
import DuoSmartphone from '../../../img/Collaboratif_ou_ind1.jpg'
import './PhotoTexte.css'

export default class PhotoTexte extends React.Component{
    render(){
        return(
            <article className="FormationPhoto">
                <img src={DuoSmartphone} alt="Deux personnes travaillant sur un smartphone"/>
                <p className='PText1'>Formez vos salariés en <strong>situation de travail</strong> avec des <strong>solutions digitales Micro Learning</strong></p>
                <p className="PText2"></p>
            </article>
        );
    }
}