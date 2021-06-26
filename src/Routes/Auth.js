import React, { useState } from 'react';
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";


const Container = styled.div`
    width:100%;
    height:100%;
    padding:45px;
`;

const Title = styled.div`

`;

const Content = styled.div`

`;

const Text = styled.div`

`;

const Button = styled.button`
  text-align:center;
  cursor:pointer;
  border:none;
`;

const LoginDesc = styled.div`
`;

const LText = styled.div`
    cursor: pointer;
`;

export default ({isLoggedIn, setIsLoggedIn }) => {
    const [status, setStatus] = useState("login");
    const email = useInput("");
    const password = useInput("");
    const name = useInput("");

    console.log(email);
    console.log(password);
    console.log(name);

    return (
        <Container>
            {status === "login" ?
                (
                    <>
                        <form onSubmit={()=> {setIsLoggedIn(true); toast("로그인 되었습니다")}}>
                            <Title>로그인</Title>
                            <Content>
                                <Text>Email Address</Text>
                                <input {...email} type="email" placeholder="이메일" />
                            </Content>
                            <Content>
                                <Text>Password</Text>
                                <input {...password} type="password" placeholder="비밀번호" />
                            </Content>
                            <Button>Login</Button>
                        </form>
                        <LoginDesc>
                            <Text>회원가입을 아직안하셨나요? </Text>
                            <LText onClick={() => { setStatus("signUp"); email.setValue(""); password.setValue(""); }} >가입하기</LText>
                        </LoginDesc>
                    </>
                ) : (
                    <form onSubmit={()=> {toast("회원가입 되었습니다")}}>
                        <Title>회원가입</Title>
                        <Content>
                            <Text>Email Address</Text>
                            <input {...email} type="email" placeholder="이메일" />
                        </Content>
                        <Content>
                            <Text>Password</Text>
                            <input {...password} type="password" placeholder="비밀번호" />
                        </Content>
                        <Content>
                            <Text>Name</Text>
                            <input {...name} type="text" placeholder="이름" />
                        </Content>
                        <Button>Signin</Button>
                    </form>
                )}

        </Container>
    )
}