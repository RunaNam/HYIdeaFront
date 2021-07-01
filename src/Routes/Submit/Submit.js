import React from 'react';
import Calendar from './Calendar';

function Submit() {

    const startDate = new Date(2021,5,4);
    const endDate= new Date(2021,5,11);
    const key_value=0;
    console.log(startDate,endDate);
    const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days_row = Days.map(
        (day) => (
            <button className="day">{day}</button>
        )
    );
    return (
        <div>
            <div className="DayRow">
                {days_row}
            </div>
            <Calendar  key = {key_value} startDate={startDate} endDate={endDate}></Calendar>
        </div>
    )
}

export default Submit;