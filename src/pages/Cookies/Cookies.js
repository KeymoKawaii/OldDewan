import React from "react";
import CookieConsent from "react-cookie-consent";

export default class PopupCookies extends React.Component{
    render(){
        return(
            <CookieConsent
                location="bottom"
                buttonText="J'accepte"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "white", fontSize: "13px" }}
                expires={250}
                acceptOnScroll={true}
                acceptOnScrollPercentage={10}
                onAccept={() => {alert("Vous avez accepté les cookies")}}
>
                <p>Notre site utilise des cookies pour améliorer votre navigation :)</p>
                {/* <p><Link to="/Cookies" >Découvrez notre politique des cookies</Link></p> */}
            </CookieConsent>
        )
    }
}

