import React, { useState } from "react";
import styled from "styled-components";

import Popup from "reactjs-popup";
import Auth from "../Routes/Auth";

import { toast } from "react-toastify";


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 10px;
`;

const Logo = styled.a`
    display:flex;
`;

const T1 = styled.div`
    border-bottom: 1px solid  #FF9E1B;
    padding-bottom: 3px;

`;
const T2 = styled.div`
    color: #FF9E1B;
    border-bottom: 1px solid  #000000;
    padding-bottom: 3px;
`;

const List = styled.div`
    display:flex;
`;

const Text = styled.div`
    cursor:pointer;
    color: #FF9E1B;
    margin-left: 10px;
`;

const Link = styled.a`
    color: #FF9E1B;
    cursor:pointer;
`;

const contentStyle = {
    width: "45%",
    height: "65%",
    borderRadius: "15px",
    padding: "0px",
};


const X = styled.div`
  cursor: pointer;
  position: absolute;
  right: -0.7em;
  top: -0.5em;
  font-size: 2.3em;
  color: #e5eaee;
`;

export default () => {
    const isLogin =localStorage.getItem('login')
    const logout=()=>{
        toast("로그아웃 되었습니다")
        localStorage.removeItem('login');
        window.location.replace("/")
    }
    console.log(isLogin)

    return (
        <Container>
            <Logo href ="/">
                <T1>When</T1>
                <T2>When</T2>
                
            </Logo>
            {
                isLogin ? (
                    <List>
                        <Link href="/#/myPage">마이페이지</Link>
                        <Text onClick={()=>{logout()}}>로그아웃</Text>
                    </List>
                ) : (
                    <List>
                        <Popup
                            trigger={
                                <Text>login</Text>
                            }
                            modal
                            contentStyle={contentStyle}
                            lockScroll={true}>
                            {close => (
                                <>
                                    <X onClick={close}>&times; </X>
                                    <Auth />
                                </>
                            )}

                        </Popup>
                    </List>
                )
            }

        </Container>
    );
}