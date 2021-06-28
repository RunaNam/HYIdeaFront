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
                        {key % 7 === 0 && <div></div>}
                        {date.click === -1 ? (<button className="disable"></button>) : (
                            <>
                                {date.click == 0 && <button className="possible"  > {date.date.getDate()} {date.click} </button>}
                                {date.click == 2 && <button className="impossible" > {date.date.getDate()} {date.click} </button>}
                                {date.click == 1 && <button className="adjustable" > {date.date.getDate()} {date.click}</button>}
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
