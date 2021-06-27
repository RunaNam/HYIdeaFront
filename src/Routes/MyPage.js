import React, {useState} from 'react';
import styled from "styled-components";

import { ko } from 'react-date-range/dist/locale';
import { DateRange } from 'react-date-range';

const Container = styled.div`

`;

const UserContainer = styled.div`

`;

const FormContainer = styled.div`

`;

const Calendar = styled.div`

`;

const Forms = styled.div`

`;

const Form = styled.div`

`;


export default ({})=>{
        const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            // color: "#9E4040"
        }
    ]);

    const forms=[
        {startDate: new Date(2021, 7, 10),
        endDate: new Date(2021, 7, 12)}
    ]

    return (
        <Container>
            <UserContainer>
                user info
            </UserContainer>
            
            <FormContainer>
                <DateRange
                    onChange={item => {}}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    locale={ko}
                    direction="horizontal"
                />
                <Forms>
                    <Form onClick = {()=>{setState(
                    [{
                                startDate: new Date(2021, 7, 10),
                            endDate: new Date(2021, 7, 12),
                                key: 'selection',
                                // color: "#9E4040"
                            }]
                    )}}> 폼 </Form>
                    <Form> 폼 </Form>
                    <Form> 폼 </Form>
                </Forms>

            </FormContainer>
        </Container>
    )
}