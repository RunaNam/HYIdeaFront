import React, { useState,useEffect } from 'react';
import ResultCalendar from "./ResultCalendar";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
function Result() {
    const startDate = new Date(2021, 5, 12);
    const endDate = new Date(2021, 5, 30);
    const key_value = 0;   
    const disableClick = -1;
    const outRangeClick = -2;
    let tmpDate = new Date(startDate);
    tmpDate.setDate(1);
    let lastDate = new Date(endDate);
    lastDate.setMonth(endDate.getMonth() + 1);
    lastDate.setDate(1);

    let [calendar, setCalendar] = useState([]);
    const [initial, setInital] = useState(true);
    let count = 0;

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
        while (tmpDate <= endDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: getRandomInt(0,3) }];
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
    }, [calendar]);

    console.log(calendar);
    console.log(startDate, endDate);
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
            <ResultCalendar key={key_value} calendar={calendar}></ResultCalendar>
        </div>
    )
}
export default Result;