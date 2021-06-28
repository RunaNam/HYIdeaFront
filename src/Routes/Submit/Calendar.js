import React, { useEffect, useState } from 'react';
import "./Calendar.css";

function Calendar({ startDate, endDate }) {
    const startDay = startDate.getDay();
    const disableClick = -1;
    const ableClick = 0;
    let tmpDate = new Date(startDate);

    let [calendar, setCalendar] = useState([]);
    const [initial, setInital] = useState(true);
    let count = 0;


    if(initial){
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
        setInital(false)
        setCalendar(calendar)
    }

    useEffect(()=>{
            calendar = [...calendar]
    })

    const handleClick = (key) => {
        const newC = calendar;
        newC[key].click = (newC[key].click + 1) % 3;
        setCalendar(newC)
        console.log(calendar)
    }

    return (
        <div>{
            calendar.map((date, key) => {
                return (
                    <>
                        {key % 7 === 0 && <br/>}
                        {date.click === -1 ? (<button className="disable"></button>) : (
                            <>
                                {date.click == 0 && <button className="possible" onClick={() => { handleClick(key); }} > {date.date.getDate()} {date.click} </button>}
                                {date.click == 1 && <button className="adjustable" onClick={() => { handleClick(key); }}> {date.date.getDate()} {date.click}</button>}
                                {date.click == 2 && <button className="impossible" onClick={() => { handleClick(key); }}> {date.date.getDate()} {date.click} </button>}
                            </>
                        )}
                    </>
                )
            }
            )
        }</div>
    )
}

export default Calendar;
