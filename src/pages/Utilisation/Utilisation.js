import React, { Fragment } from 'react';

import './Utilisation.css'
import UtilisationImg from './View/UtilisationImg';


export default class Utilisation extends React.Component{
  render(){
    return(
      <Fragment>
      <div className="Slider">
                    <div className="sliderW">
                        <div>
                            <p>Mots justes</p>
                        </div>

                        <div>
                            <p>Parole impactante</p>
                        </div>

                        <div>
                            <p>Prise de recul</p>
                        </div>
                    </div>
                    
                </div>
      <section className="CasUtilisation">
        <UtilisationImg />
    </section>
    </Fragment>
    );
  }
}