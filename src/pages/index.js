import React from "react";
import './index.css'
import Layout from '../components/layout';
import Accueil from './Accueil/Accueil.js';
import Formation from './Description/Description.js';
import ADN from './ADN/ADN';
import Application from './Application/Application';
import Utilisation from './Utilisation/Utilisation';
import Team from './Équipe/Team';

export default () => (
  <Layout>
            <Accueil/>
            <Formation />
            <ADN />
            <Application />
            <Utilisation />
            <Team />
  </Layout>
)