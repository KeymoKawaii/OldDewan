import React from 'react';
import EDDMA from '../../../img/edma_site.png'
import EDDMA_tel from '../../../img/edma_site_tel.png'
import './ImgApp.css'

export default class ImgApp extends React.Component{
    render(){
        return(
            <div className="Imgapp">
                <img className="EDDMA" src={EDDMA} alt="Graphique EDDMA" />
                <img className="EDDMATEL" src={EDDMA_tel} alt="Graphique EDDMA" />
            </div>
        )
    }
}