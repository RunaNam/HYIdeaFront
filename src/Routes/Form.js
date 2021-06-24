import React, { useState } from 'react';
import styled from "styled-components";
import { ko } from 'react-date-range/dist/locale';

import { DateRange } from 'react-date-range';

const Container = styled.div`
 
`;



export default ({ }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
            // color: "#9E4040"
        }
    ]);
    console.log(state[0].startDate)
    console.log(state[0].endDate)

    return (
        <Container>

            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                locale={ko}
            />
        </Container>
    )
}