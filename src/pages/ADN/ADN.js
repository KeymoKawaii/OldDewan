import React, { Fragment } from 'react';
import './ADN.css'
import Paragraphe1 from './View/Paragraphe1';
import Paragraphe2 from './View/Paragraphe2';

export default class ADN extends React.Component{
    render(){
        return(
            <Fragment>
                   <section className="ADN">
                       <Paragraphe1 />
                    
                <div className="Slider">
                    <div className="sliderB">
                        <div>
                            <p>Stress</p>
                        </div>
                        <div>
                            <p>Violence Interne</p>
                        </div>
                        <div>
                            <p>Violence Externe</p> 
                        </div>
                    </div>
                </div>

                    <Paragraphe2 />

                <div className="Slider">
                    <div className="container">
                        <div>
                            <p>Qualité de Service</p>
                        </div>
                        <div>
                            <p>Engagement</p>
                        </div>
                        <div>
                            <p>Motivation</p>
                        </div>
                        <div>
                            <p>Développement Economique</p>
                        </div>
                    </div>
                </div>

                </section>
                </Fragment>
 
        );
    }
}