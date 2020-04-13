import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Menu from "../../img/menu.svg"
import logo from '../../img/Logo-Dewan-Developpement-RVB.jpg';

export default class Nav extends React.Component{
    constructor(){
        super();
            let t = this;
            t.state = {
                showMenu: false,
            }

            t.showMenu = t.showMenu.bind(this);
            t.hiddenMenu = t.hiddenMenu.bind(this);
    }

    showMenu(e){
        e.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.hiddenMenu);
    });
    };

    hiddenMenu(){
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.hiddenMenu);
    })}

    render(){
        return(
            <nav>
        <AnchorLink to="/"><img src={logo} className="logo" alt="Logo de DEWAN Developpement"/></AnchorLink>
        <ul className="NavPC">
            <AnchorLink to="/#Description">Notre Action</AnchorLink>
            <AnchorLink to="/#App">Notre Solution</AnchorLink>
            <AnchorLink to="/#Team">L'équipe</AnchorLink>
            <AnchorLink to="/#Contact">Contacts</AnchorLink>
        </ul>

        <img src={Menu} alt="Menu" className="btnNav" onClick={this.showMenu}/>

        {
            this.state.showMenu
            ? (
            <ul className="NavMobile">
                        <li><a href="#action">Notre Action</a></li>
                        <li><a href="#Solution">Notre Solution</a></li>
                        <li><a href="#Team">L'équipe</a></li>
                        <li><a href="#Contact">Contacts</a></li>
            </ul>
            )
            : (
                null
                )
        }
      </nav>
        )
    }
}