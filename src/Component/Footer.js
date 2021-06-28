import React, {useState} from "react";
import styled from "styled-components";



const Footer = styled.footer`
    background-color: #2e0e0e;
    height: 4rem;
    display:flex;
    align-items:center;
`;

const InfoContainer = styled.div`
    color:white;
    font-size:0.9rem;

`;


const InfoTitle = styled.div`

`;


const Info = styled.div`

`;

export default ()=>{
    return (
        <Footer>
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