import React, {useState} from "react";
import styled from "styled-components";

import footer from "../Images/Footer.png"


const Footer = styled.footer`
    height: 4rem;
    width: 100%;
    position:absolute;
    bottom: 0;
`;

const InfoContainer = styled.div`
    position: absolute;
    bottom: 1.2rem;
    color: white;
    font-size: 0.9rem;
    line-height:1.1rem;
    left: 12%;
`;

const FooterImg = styled.img`
    width:100%;
    height: 100%;

`;


const InfoTitle = styled.div`

`;


const Info = styled.div`

`;

export default ()=>{
    return (
        <Footer>
            <FooterImg src = {footer}/>
            <InfoContainer>
                <InfoTitle>
                    CONTACT
                </InfoTitle>
                <Info>
                    adobexd@mail.com
                </Info>
            </InfoContainer>
        </Footer>

    )
}