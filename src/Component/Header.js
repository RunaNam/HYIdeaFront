import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Popup from "reactjs-popup";
import Auth from "../Routes/Auth";

const Icon = styled.div`

`;

const List = styled.div`
`;

const Text = styled.div`

`;

const contentStyle ={

  };


  const X = styled.div`

`;

export default () => {
    var [isLoggedIn, setIsLoggedIn] = useState(false)

        return (
        <div>
            <Link to="/">
                <Icon>DongBang 동방</Icon>
            </Link>
            {
                isLoggedIn ? (
                <List>
                    <Link to="/myPage">
                        <Text>마이페이지</Text>
                    </Link>
                    <Text>로그아웃</Text>
                </List>
            ) : (
                <List>
                    <Popup 
                    trigger={
                        <Text>로그인/회원가입</Text>
                    }
                    modal
                    contentStyle = {contentStyle}
                    lockScroll={true}>
                        
                        <Auth/>
                        <div>hi</div>
                    </Popup>
                </List>
                        )
            }
            
        </div>
    );
}