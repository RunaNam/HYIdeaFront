import React from 'react';
import Result from "./Result";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
`;

const InfoContainer = styled.div`
   width:35%;
   display: flex;
   flex-direction: column;
   padding: 5%;
   box-sizing: border-box;
   color:#FF9E1B;
`;

const Mypage = styled.div`
   font-size: 1.5rem;
   margin-bottom: 5rem;
`;

const Schedule = styled.div`
    border-bottom: 1px solid black;
    text-align: center;
    padding-bottom: 7px;
    margin-bottom: 3rem;
    font-size: 1.2rem;
`;

const Days = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

const FixBtn = styled.div`
    margin: 5rem auto 0;
    background-color: #FF9E1B;
    padding: 15px 55px;
    border-radius: 0.5rem;
    width: fit-content;
    cursor:pointer;
    color:white;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
`;


const getDateFormat=date=>{
    let reVal="";
    reVal+=date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate();
    return reVal;
}
function MyPage(){
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(30);
    return (
        <Container>
            <InfoContainer>
                <Mypage>마이페이지</Mypage>
                <Schedule>멋사 프로젝트</Schedule>
                <Days>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</Days>
                <FixBtn>일정 확정하기</FixBtn>
            </InfoContainer>
            <Result></Result>
        </Container>
    )
};

export default MyPage;