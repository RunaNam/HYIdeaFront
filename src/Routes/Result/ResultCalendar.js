import React, { useEffect, useState } from 'react';
import "./ResultCalendar.css";

function ResultCalendar(myCalendar) {
    const calendar = myCalendar;
    console.log(calendar);
    return (
        <>
        <div>{
            calendar.calendar.map((date, key) => {
                return (
                    <>
                        {date.date.getDay()  === 7 && <div></div>}
                        {date.click === -1 ? (<button className="disable">{date.date.getDate()} {date.click}</button>) : (
                            <>
                                {date.click === -2 && <button className="outOfRange"></button>}
                                {date.click == 0 && <button className="possible"  > {date.date.getMonth()} {date.date.getDate()}</button>}
                                {date.click == 2 && <button className="impossible" > {date.date.getMonth()} {date.date.getDate()}</button>}
                                {date.click == 1 && <button className="adjustable" > {date.date.getMonth()} {date.date.getDate()}</button>}
                            </>
                        )}
                    </>
                )
            }
            )
        }</div>
        </>
    )
}

export default ResultCalendar;
