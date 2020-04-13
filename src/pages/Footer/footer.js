import React, { Fragment } from "react";

import LK from '../../img/linkedin.svg';
import FB from '../../img/facebook.svg';
import TW from '../../img/twitter.svg';
import logo from '../../img/LogoKeymo.svg';

import SEO from "../../components/seo";
import './Footer.css';
import TextCoord from "./TextContact/TextCoord";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Footer = () => (
  <Fragment>
    <SEO title="footer" />
    <footer>
                <div id="Contact">
                    <TextCoord />
                    <div>
                        <p><AnchorLink to="/Mentions">Mentions Légales</AnchorLink></p>
                    </div>
                    <div className="rs">
                        <p>Nos Réseaux sociaux</p>
                        <p><a href="https://www.linkedin.com/in/dewan-developpement/" target="blank"><img src={LK} alt="Logo de Linkedin" /></a></p>
                        <p><a href="https://www.facebook.com/dewandeveloppement" target="blank"><img src={FB} alt="Logo de Facebook" /></a></p>
                        <p><a href="https://twitter.com/Dewan_dvpt" target="blank"><img src={TW} alt="Logo de Twitter" /></a></p>
                    </div>
                </div>
                <p className="by">Designed by Keymo <img src={logo} alt="Logo de Keymo" /></p>
            </footer>
  </Fragment>
)

export default Footer
