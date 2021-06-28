import React from 'react';
import { toast } from 'react-toastify';

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50rem;
    padding:0 20%;
    box-sizing: border-box;

`;

const Content = styled.div`
    padding-top: 4rem;
    text-align: center;
`;


const Text = styled.div`
    padding-bottom: 1rem;
    cursor: default;
`;

const Image = styled.div`
    background-color: black;
    height:30rem;
    border-radius: 1rem;
`;

const Button = styled.div`
    margin: 2rem auto 0;
    background-color: orange;
    padding: 14px 22px;
    border-radius: 0.5rem;
    width: fit-content;
    cursor:pointer;
`;

const Check =()=>{
    

}


export default ({})=>{
    const isLogin =localStorage.getItem('login')
    console.log(isLogin)

    return (
        <Container>
            <Content>
            <Text> 지인들과 일정을 잡으세요.</Text>
            <Image>
                    ''
            </Image>
            <Button onClick={()=>{isLogin?(window.location.replace("/#/form")):(toast("로그인이 필요합니다"))}}>일정 맞추기</Button>
            </Content>
        </Container>
    )
}