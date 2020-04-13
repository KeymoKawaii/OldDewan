import React from 'react';
import Guéna from '../../img/Guena.jpg'
import Paolo from '../../img/Paolo.jpg'
import Aurélie from '../../img/Aurelie.jpg'
import ESG from "../../img/ESG.jpg"
import Maya from "../../img/Maya.jpg"
import './Team.css';

export default class Team extends React.Component{
    render(){
        return(
        <section className="equipe" id="Team">
          <h3>Les Wanis</h3>
          <hr />
          <div>     
            <div className="Ecosysteme">

            <div className="blockequipe Guena">
              <img src={Guéna} alt="Guénaëlle Halgand, fondatrice et dirigeante de Dewan Développement" />
              <div className="Title">
                <h6>Guénaëlle HALGAND <br/> Fondatrice et dirigeante</h6>
              </div>
              <div className="Hover">
                <p>Au bout de 20 ans dans la gestion de relation humaine elle a constaté qu’il manquait une passerelle 
                  entre les apprentissages théoriques d’une formation en présentielle sur les techniques de 
                  communication et l’application sur le terrain. Elle a fondé DEWAN pour répondre à ce besoin.</p>
              </div>
            </div>

              <div className="blockequipe Paolo">
                <img src={Paolo} alt="Paolo Trapu, Développeur Web" />
                <div className="Title">
                  <h6>Paolo TRAPU<br/> Développeur Web</h6>
                </div>
                <div className="Hover">
                  <p>Passionné du web et des algorithmes, Dewan ne se passera pas de
                  ses passions pour sa dynamique de site !</p>
                </div>
              </div>

              <div className="blockequipe Aurelie">
                <img src={Aurélie} alt="Aurélie Monnin, Conseil Communication manager" />
                <div className="Title">
                  <h6>Aurélie MONNIN <br/> Conseil communication manager</h6>
                </div>
                <div className="Hover">
                  <p>Experte en communication, Aurélie a rejoint l’aventure Dewan depuis 6 mois. 
                    Animatrice engagée de notre écosystème, ses conseils sont aussi précieux
                    que son investissement.</p>
                </div>
              </div>

              <div className="blockequipe Maya">
                <img src={Maya} alt="Maya Lozach, Chef de projet digital" />
                <div className="Title">
                  <h6>Maya Lozach<br/> Chef de projet digital</h6>
                </div>
                <div className="Hover">
                  <p>Après des études dans le multimédia et l'internet et une année en communication sur les réseaux sociaux, 
                    Maya intègre l'équipe et prend en main la communication digitale de Dewan Développement</p>
                </div>
              </div>

              <div className="blockequipe ESG">
                <img src={ESG} alt="Claire et Alice de l'ESG" />
                <div className="Title">
                  <h6>Claire et Alice <br/> Étudiantes à l'ESG</h6>
                </div>
                <div className="Hover">
                  <p>Merci à Claire et Alice, étudiantes en 1ère année de Master à l'ESG de Rennes qui sont venues enrichir DEWAN de leurs connaissances 
                    et leurs compétences dans le cadre de leur stage " Mission Startup'"  sur une thématique entreprenariale. </p>
                </div>
              </div>

            </div>
          </div>
          
        </section>
          
        );
    }
}