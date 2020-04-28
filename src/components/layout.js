import React from 'react';

import './Layout.css';

import Footer from '../pages/Footer/footer';
// import GA from './../Tools/GoogleAnalytics';
import Nav from './../pages/Nav/Nav';
// import PopupCookies from './../pages/Cookies/Cookies';

export default ({children}) =>(
  <div>
    <Nav />
    {children}
    {/* <GA /> */}
    {/* <PopupCookies /> */}
    <Footer />
  </div>
)