import React from 'react';
import Result from "./Result/Result";

const getDateFormat=date=>{
    let reVal="";
    reVal+=date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate();
    return reVal;
}
function MyPage(){
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(30);
    return (
        <div>
            <span>
            <div className="myPage">마이페이지</div>
            <div className="scheduleName">멋사 프로젝트</div>
            </span>
            <div className="rangeOfDays">{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</div>
            <Result></Result>
        </div>
    )
};

export default MyPage;