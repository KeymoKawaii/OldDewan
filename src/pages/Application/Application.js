import React from 'react';
import './Application.css';
import TextApp from './View/TextApp';
import ImgApp from './View/ImgApp';

export default class Application extends React.Component{
    render(){
        return(
            <section className="Application" id="App">
            <TextApp />
            <ImgApp />

            </section>
        );
    }
}