import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Popup from "reactjs-popup";
import Auth from "../Routes/Auth";

import { toast } from "react-toastify";

const Icon = styled.div`

`;

const List = styled.div`
`;

const Text = styled.div`
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
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log(isLoggedIn)
    return (
        <div>
            <Link to="/">
                <Icon>프로젝트명</Icon>
            </Link>
            {
                isLoggedIn ? (
                    <List>
                        <Link to="/myPage">
                            <Text>마이페이지</Text>
                        </Link>
                        <Text onClick={()=>{setIsLoggedIn(false); toast("로그아웃 되었습니다")}}>로그아웃</Text>
                    </List>
                ) : (
                    <List>
                        <Popup
                            trigger={
                                <Text>로그인/회원가입</Text>
                            }
                            modal
                            contentStyle={contentStyle}
                            lockScroll={true}>
                            {close => (
                                <>
                                    <X onClick={close}>&times; </X>
                                    <Auth isLoggedIn ={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
                                </>
                            )}

                        </Popup>
                    </List>
                )
            }

        </div>
    );
}