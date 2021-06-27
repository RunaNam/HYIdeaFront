import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { DayPickerSingleDateController, CalendarDay } from "react-dates";
import "../Routes/Css/Submit-overrides.css";
// component

const Submit = () => {
    // dates state에 클릭 수를 추가할 방법이 있는지?
    const [fDates, setFDates] = useState([]);
    const [sDates, setSDates] = useState([]);
    // handleChange 함수에 대한 이해

    const handleChange = date => {
        // dates가 현재 새로운 date를 포함한다면
        var newFDates=fDates;
        var newSDates=sDates;
        if(!fDates.includes(date)&&!sDates.includes(date)){
            newFDates=[...fDates,date];
            console.log("append in f");
            console.log(date);
        }
        else if(!fDates.includes(date)&&sDates.includes(date)){
            newSDates=sDates.filter(d=>!date.isSame(d));
            console.log("delete in s");
            console.log(date);
        }
        else if(fDates.includes(date)&&!sDates.includes(date)){
            newFDates=fDates.filter(d=>!date.isSame(d));
            newSDates=[...sDates,date];
            console.log("delete in f");
            console.log("append in s");
            console.log(date);
        }
        // const newSDates = fDates.includes(date)
        //     // 포함한다면 date를 없앤 fdates가 newDates가 된다.
        //     ? fDates.filter(d => !date.isSame(d))
        //     // 포함하지 않는다면 date를 추가한 fdates가 newDates가 된다.
        //     : [...fDates, date];
        setFDates(newFDates);
        setSDates(newSDates);
        console.log(fDates);
        console.log(sDates);
    };
    return (
        <DayPickerSingleDateController
            numberOfMonths={1}
            onDateChange={handleChange}
            hideKeyboardShortcutsPanel
            monthFormat="YYYY년 MMMM"
            renderCalendarDay={props => {
                const { day, modifiers } = props;

                // 이 부분을 수정하면 될듯
                // className을 추가한 뒤 css를 오버라이딩 한다.
                if (sDates.includes(day)) {
                    modifiers && modifiers.add("selected");
                } else {
                    modifiers && modifiers.delete("selected");
                }

                return <CalendarDay {...props} modifiers={modifiers} />;
            }}
        />
    );
};
export default Submit;
