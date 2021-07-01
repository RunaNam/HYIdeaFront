import React, { useState } from 'react';
import styled from "styled-components";
import { ko } from 'react-date-range/dist/locale';

import { DateRange } from 'react-date-range';
import './Form.css'

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 20% 0;
`;

const Buttons = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 5rem;
    text-align: center;
    color:white;
`;

const Quit = styled.div`
    background-color: #FFDCAC;
    width: 7rem;
    padding: 13px 8px;
    border-radius: 0.2rem;
    box-shadow: 1px 2px 5px #bfbfbf;
    cursor: pointer;

`;

const Make = styled.div`
    background-color: #FF9E1B;
    width: 7rem;
    padding: 13px 8px;
    margin-left: 2rem;
    border-radius: 0.2rem;
    cursor: pointer;
    box-shadow: 1px 2px 5px #bfbfbf;
`;

export default ({ }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            color: "#000000"
        }
    ]);
    console.log(state[0].startDate)
    console.log(state[0].endDate)

    const make=()=>{
        localStorage.setItem('startDate', state[0].startDate);
        localStorage.setItem('endDate', state[0].endDate);
        window.location.replace("/#/myPage")
    }

    return (
        <Container>

            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                locale={ko}
                 months={2}
                 direction="horizontal"
            />
            <Buttons>
                <Quit onClick={()=>{window.location.replace("/")}} >취소</Quit>
                <Make onClick={()=>{make()}}>일정 생성하기</Make>
            </Buttons>

        </Container>
    )
}