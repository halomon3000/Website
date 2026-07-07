import { useState, useEffect } from 'react';
import './ScheduleSite.css';

export function ScheduleSite() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);

    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    const divDates = [];

    for (let i = 1; i <= lastDay; i++) {
        divDates.push(
        <div key={"Date" + i} className="date-box">
            <h3>{i}</h3>
        </div>
        );
    }
    return (
        <>
            <div className='schedule-header'>
                <h1 className='yearText'> {currentDate.getFullYear()} </h1>
            </div>
            <div className='schedule-header'>
                <h1 className='monthText'> {currentDate.toLocaleString('default', { month: 'long' })} </h1>
            </div>        
            <div className='schedule-grid'>
                {divDates}
            </div>
        </>
    )
}