import React from 'react';
import CalendarRow from './Calendar';

function Submit() {

    const startDate = new Date(2021,5,4);
    const endDate= new Date(2021,5,11);
    const key_value=0;
    console.log(startDate,endDate);
    const Days = ['일', '월', '화', '수', '목', '금', '토'];
    const days_row = Days.map(
        (day) => (
            <span>{day}</span>
        )
    );
    return (
        <div>
            <div className="DayRow">
                {days_row}
            </div>
            <CalendarRow  key = {key_value} startDate={startDate} endDate={endDate}></CalendarRow>
        </div>
    )
}

export default Submit;