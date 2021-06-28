import React, { useEffect, useState } from 'react';
import "./Submit.css";

function CalendarRow({ startDate, endDate }) {
    const startDay = startDate.getDay();
    const disableClick = -1;
    const ableClick = 0;
    let tmpDate = new Date(startDate);

    // calendar 라는 변수에 넣어두고 그걸 useEffect에서 mycalendar로 넣음..
    let [calendar, setCalendar] = useState([]);
    const [myCal, setMyCal] = useState([]);
    const [initial, setInital] = useState(true);
    let count = 0;




    // while (tmpDate <= endDate) {
    //     const tmp = new Date(tmpDate);
    //     calendar = [...calendar, { date: tmp, click: ableClick }];
    //     tmpDate.setDate(tmpDate.getDate() + 1);
    //     count++;
    // }
    // while (count % 7 != 0) {
    //     calendar = [...calendar, { date: tmpDate, click: disableClick }];
    //     count++;
    // }

    // let count = 0;
    // while (count < startDay) {
    //     calendar = [...calendar, { date: tmpDate, click: disableClick }];
    //     count++;
    // }
    // while (tmpDate <= endDate) {
    //     const tmp = new Date(tmpDate);
    //     calendar = [...calendar, { date: tmp, click: ableClick }];
    //     tmpDate.setDate(tmpDate.getDate() + 1);
    //     count++;
    // }
    // while (count % 7 != 0) {
    //     calendar = [...calendar, { date: tmpDate, click: disableClick }];
    //     count++;
    // }

    if (initial) {
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

    if (count < startDay) {
        console.log(count)
        calendar = [...calendar];
        count++;
    }

    // // // 초기화 함수, 첫 렌더링때만 돌아감.
    // useEffect(()=>{
    //     if(initial){
    //         let count = 0;
    //         while (count < startDay) {
    //             calendar = [...calendar, { date: tmpDate, click: disableClick }];
    //             count++;
    //         }
    //         while (tmpDate <= endDate) {
    //             const tmp = new Date(tmpDate);
    //             calendar = [...calendar, { date: tmp, click: ableClick }];
    //             tmpDate.setDate(tmpDate.getDate() + 1);
    //             count++;
    //         }
    //         while (count % 7 != 0) {
    //             calendar = [...calendar, { date: tmpDate, click: disableClick }];
    //             count++;
    //         }
    //     }
    //     setInital(false)
    //     setCalendar(calendar)
    // },[])



    const handleClick = (key) => {
        const newC = calendar;
        newC[key].click = (newC[key].click + 1) % 3;
        setCalendar(newC)
    }

    return (
        <div>{
            calendar.map((date, key) => {
                return (
                    <>
                        {key % 7 === 0 && <div></div>}
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

export default CalendarRow;