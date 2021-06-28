import React, { useState } from 'react';
import ResultCalendar from "./ResultCalendar";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
function Result() {
    const startDate = new Date(2021, 5, 12);
    const endDate = new Date(2021, 5, 31);
    const key_value = 0;
    const startDay = startDate.getDay();
    const disableClick = -1;
    const ableClick = 0;
    let tmpDate = new Date(startDate);
    let [calendar, setCalendar] = useState([]);
    let count = 0;
    const [initial, setInital] = useState(true);
    if (initial) {
        while (count < startDay) {
            calendar = [...calendar, { date: tmpDate, click: disableClick }];
            count++;
        }
        while (tmpDate <= endDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: getRandomInt(0,3) }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (count % 7 != 0) {
            calendar = [...calendar, { date: tmpDate, click: disableClick }];
            count++;
        }
        setInital(false);
        setCalendar(calendar);
    }
    console.log(calendar);
    console.log(startDate, endDate);
    const Days = ['일', '월', '화', '수', '목', '금', '토'];
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