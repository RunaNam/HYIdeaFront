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
            // autoFocus: false
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
                    showSelectionPreview ={false}
                />
                
                <Forms>
                    <Form onClick = {()=>{setState(
                        [{
                            startDate: new Date(2021, 7, 10),
                            endDate: new Date(2021, 7, 12),
                            key: 'selection',
                        }]
                    )}}> 폼 </Form>
                    <Form onClick = {()=>{setState(
                        [{
                            startDate: new Date(2021, 5, 10),
                            endDate: new Date(2021, 5, 12),
                            key: 'selection',
                        }]
                    )}}> 폼 </Form>
                    <Form onClick = {()=>{setState(
                        [{
                            startDate: new Date(2021, 6, 10),
                            endDate: new Date(2021, 6, 12),
                            key: 'selection',
                        }]
                    )}}> 폼 </Form>
                </Forms>

            </FormContainer>
        </Container>
    )
}