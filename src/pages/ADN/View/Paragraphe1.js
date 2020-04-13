import React from "react"
import'./Paragraphe1.css'

export default class Paragraphe1 extends React.Component{
    render(){
        return(
            <div className="backgroundP1">
                <div className="backgroundwhite">
                <p className="Paragraphe1Titre">Dewan repose sur 20 ans d’expertise dans la gestion de la <br />
                <span> relation interpersonnelle et la gestion de conflits.</span></p>
                <div>
                    <p className="Paragraphe1gauche">Nous avons mis au point une <span>nouvelle forme d’apprentissage</span> des 
                    <span> compétences comportementales</span> pour développer plus efficacement les <span>ressources de chacun </span> 
                    pour faire face aux situations de tension et/ou au dépassement de la crise.</p>

                    <div>
                        <p className="methode">Notre <span>méthode</span> met l’accent sur <span>l’individu dans l'organisation</span> :</p>
                        <ul className="methodelist">
                            <li><span>Elle a</span> pour objectifs d’aider les salariés à gérer les exigences du travail plus efficacement en améliorant 
                        leurs stratégies d’adaptation ou en soulageant les symptômes du stress.<br /></li>
                            <li><span>Elle permet</span> aux salariés de développer leur potentiel relationnel, de prendre du recul sur les
                            situations de tension, d'augmenter leur self management et le self control.</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}