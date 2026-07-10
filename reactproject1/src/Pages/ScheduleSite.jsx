import { useState, useEffect } from 'react';
import './ScheduleSite.css';

export function ScheduleSite() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const divDates = [];
    const divDatesSpaces = [];
    const divDaysOfWeek = [];
    const DaysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    for(let j = 0; j < 7; j++) {
        divDaysOfWeek.push(
            <div className="days-of-week">
                <h4>{DaysArray[j]}</h4>
            </div>
        )
    }
    for(let k = firstDay.getDay(); k > 0;k--){/*Adds the last days of the previous month */
        divDates.push(
        <div className="date-space">
            <h3>{lastDayPrevMonth.getDate() - k}</h3>
        </div>
        );    
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
        divDates.push(
        <div key={"Date" + i} className="date-box">
            <h3>{i}</h3>
        </div>
        );
    }
    for(let p = 1; p < 7-lastDay.getDay();p++){/*Adds the last days of the previous month */
        divDates.push(
        <div className="date-space">
            <h3>{p}</h3>
        </div>
        );    
    }
    return (
        <>
            <div className='schedule-header'>
                <h1 className='yearText'> {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()} </h1>
            </div>
            <div className='schedule-grid'> 
                {divDaysOfWeek}
            </div>
            <div className='schedule-grid'>
                {divDates}
            </div>
        </>
    )
}