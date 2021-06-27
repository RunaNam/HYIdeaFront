import React, { useState } from 'react';
import "./Submit.css";
function CalendarRow({ startDate, endDate }) {
    const startDay = startDate.getDay();
    const disableClick = -1;
    const ableClick = 0;
    let tmpDate = new Date(startDate);
    let calendar = [];
    let count = 0;
    while (count < startDay) {
        calendar = [...calendar, { date: tmpDate, click: disableClick }];
        count++;
    }
    while (tmpDate <= endDate) {
        const tmp = new Date(tmpDate);
        calendar = [...calendar, { date: tmp, click: ableClick }];
        tmpDate.setDate(tmpDate.getDate() + 1);
        count++;
    }
    while (count % 7 != 0) {
        calendar = [...calendar, { date: tmpDate, click: disableClick }];
        count++;
    }
    console.log(calendar);
    count = 0;
    const handleClick=(key)=>{
        calendar[key].click=calendar[key].click+1;
        return;
    }
    const selectedCalendar = calendar.map(
        (date, key) => {
            console.log(key);
            return (<>
                {key % 7 === 0 && <div></div>}
                {date.click === -1 ? (<button className="disable"></button>) : (
                    <>{date.click % 3 === 0 && <button className="possible" onClick={()=>{handleClick(key)}}>{date.date.getDate()}</button>}
                        {date.click % 3 === 1 && <button className="adjustable" onClick={()=>{handleClick(key)}}>{date.date.getDate()}</button>}
                        {date.click % 3 === 2 && <button className="impossible"onClick={()=>{handleClick(key)}}>{date.date.getDate()}</button>}
                    </>
                )}
            </>
            )
        }
    );
    return (
        <div>{selectedCalendar}</div>
    )
}

export default CalendarRow;