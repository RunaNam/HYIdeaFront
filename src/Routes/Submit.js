import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Submit() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
            // color: "#9E4040"
        }
    ]);
    return (
        <Calendar
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            months={2}
            direction="horizontal"
        />
    )
}
export default Submit;
