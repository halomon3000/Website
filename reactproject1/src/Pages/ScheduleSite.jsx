import { useState, useEffect } from 'react';
import './ScheduleSite.css';
import './ScheduleSites/AddEvent.jsx'

import { useNavigate } from 'react-router-dom';

/*The images for Month selection buttons */
import nextMonthButton from '../assets/arrow-right-circle.svg'
import nextMonthButtonOnClick from '../assets/arrow-right-circle-fill.svg'
import prevMonthButton from '../assets/arrow-left-circle.svg'
import prevMonthButtonOnClick from '../assets/arrow-left-circle-fill.svg'

export function ScheduleSite() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const pad = (n) => String(n).padStart(2, '0');
    const toDateStr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

    const divDates = [];
    const divDaysOfWeek = [];
    const DaysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const [savedEvents, setSavedEvents] = useState([]);
      
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
    
    const navigate = useNavigate();

    const getEventsForDate = (dateStr) =>
        savedEvents.filter((evt) => {
        const start = evt.startDate;
        const end = evt.endDate || evt.startDate; // all-day events may have no endDate
        return start <= dateStr && dateStr <= end; // yyyy-MM-dd strings compare correctly
    });

    const handleDateClick = (day,monthData) => {
        // Take me to the AddEvent Page please
        let clickedDate
        if(monthData == "Previous"){
            clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day);
        }
        else if (monthData == "Next"){
            clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
        }
        else {
            clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        }

        // Format as YYYY-MM-DD or however your input expects it
        const formattedDate = clickedDate.toISOString().split('T')[0];

        console.log("Clicked date:", formattedDate);
        navigate('/AddEvent', {state: { startDay: formattedDate }})

    };

    /*These 4 for loops layout the calendar boxes */
    for(let j = 0; j < 7; j++) {
        divDaysOfWeek.push(
            <div key={"DayOfWeek-" + j} className="days-of-week">
                <h4>{DaysArray[j]}</h4>
            </div>
        )
    }
    for(let k = firstDay.getDay(); k > 0;k--){/*Adds the last days of the previous month */
        divDates.push(
        <div key={"PrevMonth-" + k} className="date-space" onClick={() => handleDateClick(lastDayPrevMonth.getDate() - k+1, "Previous")}>
            <h3>{lastDayPrevMonth.getDate() - k+1}</h3>
        </div>
        );    
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        const cellStr = toDateStr(cellDate);
        const dayEvents = getEventsForDate(cellStr);
        divDates.push(
            <div key={"Date" + i} className="date-box" onClick={() => handleDateClick(i, "Current")}>
                <h3>{i}</h3>
                {dayEvents.map((evt) => {
                    const end = evt.endDate || evt.startDate;
                    const isStart = evt.startDate === cellStr;
                    const isEnd = end === cellStr;
                    const isSunday = cellDate.getDay() === 0;

                    return (
                        <div
                            key={evt.eventId || evt.eventTitle + evt.startDate}
                            className={`event ${isStart ? 'event-start' : ''} ${isEnd ? 'event-end' : ''}`}
                            onClick={(e) => e.stopPropagation()} // don't trigger the date box's onClick
                        >
                            <h4>{isStart || isSunday ? evt.eventTitle : '\u00A0'}</h4>
                        </div>
                    );
                })}
            </div>
        );
    }
    for(let p = 1; p < 7-lastDay.getDay();p++){/*Adds the first days of the next month */
        divDates.push(
        <div key={"NextMonth-" + p} className="date-space" onClick={() => handleDateClick(p,"Next")}>
            <h3>{p}</h3>
        </div>
        );    
    }

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Replace with your actual HTTP API Invoke URL + /events
                const response = await fetch("https://6sst5xcr02.execute-api.us-east-1.amazonaws.com/events");
                if (!response.ok) throw new Error("Failed to fetch events");
                const data = await response.json();
                setSavedEvents(data);
            } catch (error) {
                console.error("Error loading events:", error);
            }
        };

        fetchEvents();
    }, []);


    return (
        <>
            <div className='schedule-header'>
                <img id='prevMonthButton' className="month-btn prev" onClick={changeMonth}/>
                <h1 className='yearText'> {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()} </h1>
                <img id='nextMonthButton' className="month-btn next" onClick={changeMonth}/>
            </div>
            <div className='schedule-grid'> 
                {divDaysOfWeek}
            </div>
            <div className='schedule-grid'>
                {divDates}
            </div>
            
             <div className='events-list'>
                <h2>Saved Events:</h2>
                <ul>
                    {savedEvents.map((evt) => (
                        <li key={evt.eventId || evt.startDate}>
                            <strong>{evt.eventTitle}</strong> ({evt.startDate}) - {evt.eventDescription}
                        </li>
                    ))}
                </ul>
            </div>


        </>     
    )
}