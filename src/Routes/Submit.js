import React,{useState, useEffect} from 'react';
import Calendar from '../Component/Calendar';

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 3%;
`;

const InfoContainer = styled.div`
   width:35%;
`;

const DayContainer = styled.div`
    width: 65%;
`;

const Test = styled.div`

`;

const Text = styled.div`

`;

const Number = styled.div`

`;

const Des = styled.div`

`;



const DayRow = styled.div`
    display:flex;
    cursor: pointer;
`;

const Day = styled.div`
    width: calc(100%/7);
    padding: 0 3px;
    box-sizing: border-box;
    text-align: center;
    color: #BEBEBE;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.2rem;
`;

const Cal = styled.div`
`;

const Info = styled.div`
    width: 50%;
    margin: 0 auto 2rem;
    color: #FF9E1B;
`;

const Title = styled.div`
    border-bottom: 1px solid black;
    text-align: center;
    padding-bottom: 7px;
    margin-bottom: 3rem;
    font-size: 1.2rem;
`;


const MyDays = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

function Submit() {
    const startDate = new Date(sessionStorage.getItem("startDate"));
    const endDate = new Date(sessionStorage.getItem("endDate"));
    
    const disableClick = -1;
    const ableClick = 0;
    const outRangeClick = -2;
    let tmpDate = new Date(startDate);
    tmpDate.setDate(1);
    let lastDate = new Date(endDate);
    lastDate.setMonth(endDate.getMonth() + 1);
    lastDate.setDate(1);
    
    let [calendar, setCalendar] = useState([]);
    const [initial, setInital] = useState(true);

    
    let count = 0;
    console.log(lastDate);
    if (initial) {
        while (count < tmpDate.getDay()) {
            calendar = [...calendar, { date: tmpDate, click: outRangeClick }];
            count++;
        }
        while (tmpDate < startDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: disableClick }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (tmpDate <= endDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: ableClick }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (tmpDate < lastDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: disableClick }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (count % 7 !== 0) {
            calendar = [...calendar, { date: tmpDate, click: outRangeClick }];
            count++;
        }
        setInital(false);
        setCalendar(calendar);
    }

    useEffect(() => {
        calendar = [...calendar]
    }, [calendar]);

    const handleClick = (key) => {
        const newC = calendar;
        newC[key].click = (newC[key].click + 1) % 3;
        setCalendar(newC);
    }



    const key_value=0;
    console.log(startDate,endDate);
    const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days_row = Days.map(
        (day) => (
            <Day>{day}</Day>
        )
    );

    const getDateFormat=date=>{
        let reVal="";
        reVal+=date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate();
        return reVal;
    }

    return (
        <Container>
            <InfoContainer>
                <Test>
                    <Text>클릭하세요</Text>
                    <Number>1</Number>
                    <Des>가능한날</Des>
                </Test>
            </InfoContainer>
            <DayContainer>
                <Info>
                        <Title>멋쟁이 사자처럼 팀프로젝트 일정</Title>
                        <MyDays>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</MyDays>

                </Info>
                <DayRow>
                    {days_row}
                </DayRow>
                <Cal>
                    <Calendar myCalendar={calendar} key = {key_value} startDate={startDate} endDate={endDate} handleClick = {handleClick}></Calendar>
                </Cal>
            </DayContainer>
        </Container>
    )
}

export default Submit;