import React, { Fragment } from 'react'

export default class UtilisationImg extends React.Component{
    render(){
      return(
          <Fragment>
          <div>
            <div className="seul">
                <p>Seul ou à plusieurs</p>
            </div>

            <div className="conduite">
                <p>Conduite de changement ou<br /> plan de développement des compétences</p>
            </div>
    
            <div className="smartphone">
              <p>Sur smartphone ou ordinateur</p>
            </div>
          </div>
          
          <p className="Paragraphe">Innovez la formation, boostez votre capital humain !</p>
        </Fragment>
      );
    }
  }