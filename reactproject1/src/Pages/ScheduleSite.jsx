import { useState, useEffect } from 'react';
import './ScheduleSite.css';

/*The images for Month selection buttons */
import nextMonthButton from '..\\assets\\arrow-right-circle.svg'
import nextMonthButtonOnClick from '..\\assets\\arrow-right-circle-fill.svg'
import prevMonthButton from '..\\assets\\arrow-left-circle.svg'
import prevMonthButtonOnClick from '..\\assets\\arrow-left-circle-fill.svg'

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

    const changeMonth = (e) => {
        const elementId = e.currentTarget.id
        const newDate = new Date(currentDate);
        if(elementId === "prevMonthButton"){
            newDate.setMonth(currentDate.getMonth() - 1);
        } else if(elementId === "nextMonthButton"){
            newDate.setMonth(currentDate.getMonth() + 1);
        } else {
            console.log("clicked:",elementId)
        }
        
        setCurrentDate(newDate)
        
    }

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
            <h3>{lastDayPrevMonth.getDate() - k+1}</h3>
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
    for(let p = 1; p < 7-lastDay.getDay();p++){/*Adds the first days of the next month */
        divDates.push(
        <div className="date-space">
            <h3>{p}</h3>
        </div>
        );    
    }
    return (
        <>
            <div className='schedule-header' >
                <img id='prevMonthButton' src={prevMonthButton} onClick={changeMonth}/>
                <h1 className='yearText'> {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()} </h1>
                <img id='nextMonthButton' src={nextMonthButton} onClick={changeMonth}/>
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