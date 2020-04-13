import React from  'react';
import './SlideMot.css'

const Slidemots = props =>{
    return(
        <section className="Slider">
            <div className="Mots-">
                <div>
                    <p>{props.Mot1}</p>
                </div>
                <div>
                    <p>{props.Mot2}</p>
                </div>
                <div>
                    <p>{props.Mot3}</p>
                </div>
            </div>
            <div className="MotsPositif">
                <div>
                    <p>{props.Mot4}</p>
                </div>
                <div >
                    <p>{props.Mot5}</p>
                </div>
                <div>
                    <p>{props.Mot6}</p>
                </div>
            </div>
        </section>
    );
}

export default Slidemots