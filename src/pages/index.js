import React from "react";

import './index.css'

import Layout from '../components/layout';
import Formation from './Description/Description.js';
import ADN from './ADN/ADN';
import Application from './Application/Application';
import Utilisation from './Utilisation/Utilisation';
import Team from './Équipe/Team';
import SEO from "../components/seo";

export default () => (
  <Layout>  
            <SEO title="La Relation à votre avantage !" />
            <Formation />
            <ADN />
            <Application />
            <Utilisation />
            <Team />
  </Layout>
)