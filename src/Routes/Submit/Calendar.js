import React, { useEffect, useState } from 'react';
import "./Submit.css";


function Calendar({ startDate, endDate }) {
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
    const [month, setMonth] = useState(startDate.getMonth());
    let count = 0;

    const nextMonth = () => setMonth(month + 1);
    const prevMonth = () => setMonth(month - 1);
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
        while (tmpDate < endDate) {
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
    }, [calendar, month]);

    const handleClick = (key) => {
        const newC = calendar;
        newC[key].click = (newC[key].click + 1) % 3;
        setCalendar(newC)
        console.log(calendar)
    }
    console.log(month);
    let val=0;
    return (
        <div>
            {/* <button onClick={prevMonth}>prev</button>
            <button onClick={nextMonth}>next</button> */}
            <div>{
                calendar.map((date, key) => {
                    return (
                        <>
                            {date.click === -1 ? (<button className="disable">{date.date.getDate()} {date.click}</button>) : (
                                <>
                                    {date.click === -2 && <button className="outOfRange"></button>}
                                    {date.click === 0 && <button className="possible" onClick={() => { handleClick(key); }} > {date.date.getDate()} {date.click} </button>}
                                    {date.click === 1 && <button className="adjustable" onClick={() => { handleClick(key); }}> {date.date.getDate()} {date.click}</button>}
                                    {date.click === 2 && <button className="impossible" onClick={() => { handleClick(key); }}> {date.date.getDate()} {date.click} </button>}
                                </>
                            )}
                            {date.date.getDay() === 6 && <br />}
                        </>
                    )
                }
                )
            }</div></div>

    )
}

export default Calendar;
