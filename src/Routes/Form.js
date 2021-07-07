import React from 'react';

<<<<<<< HEAD
import { DateRange } from 'react-date-range';
import './Form.css'
import useInput from '../Hooks/useInput';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 20%;
`;

const Buttons = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 5rem;
    text-align: center;
    color:white;
`;

const Quit = styled.div`
    background-color: #000000;
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

const Name = styled.input`
    width: 60%;
    margin: 0 20% 20px;
    font-size: 1.3rem;
    border: none;
    border-bottom: 2px solid #FF9E1B;
    font-family: 'Noto Sans CJK KR';
    text-align: center;
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
    const name = useInput("");

    const make=()=>{
        sessionStorage.setItem('startDate', state[0].startDate);
        sessionStorage.setItem('endDate', state[0].endDate);
        sessionStorage.setItem('name', name.value);
        window.location.replace("/#/myPage")
    }

    return (
        <Container>
            <Name {...name} placeholder ="일정 이름"></Name>

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
=======
export default ({})=>{

    return (
        <div>
            form
        </div>
>>>>>>> 2b9304b8cae19f372913f27328445eb5badcd743
    )
}