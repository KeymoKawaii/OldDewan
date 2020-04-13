import React from "react"
import "./Paragraphe2.css"

export default class Paragraphe2 extends React.Component{
    render(){
        return(
            <div className="opposition">
                
                <div className="negatif">
                    <p className="Paragraphe3"><span>Notre MISSION</span> <br /><br /> Placer l'humain au coeur des enjeux de 
                    transformation RH.<br />Nous voulons performer les talents de l'entreprise, les faire grandir pour les fidéliser,
                    contribuer à créer un climat favorable à la motivation professionnelle.</p>
                </div>

                <div className="positif">
                    <p className="Paragraphe4"><span>Nos VALEURS</span> <br /><br />Conscient de l’ampleur du défi, 
                    DEWAN adopte une position résolument optimiste, bienveillante, collaborative, empathique 
                    et créative pour inscrire son action dans le respect des droits humains qu’elle défend. </p>
                </div>

                <div>
                    <p><span>Notre AMBITION</span><br /><br />Vous permettre de valoriser votre capital humain en rapprochant les
                    ressources humaine de la réalité du terrain. <br/>
                    Motiver et engager vos collaborateurs dans leurs formations professionnelles. <br />
                    Rendre efficace votre Gestion Prévisionnelle de l'Emploi et des Compétences. (GPEC)</p>
                    </div>
            </div>
        );
    }
}