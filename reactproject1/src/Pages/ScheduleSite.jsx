import { useState, useEffect } from 'react';
import './ScheduleSite.css';

/*The images for Month selection buttons */
import nextMonthButton from '../assets/arrow-right-circle.svg'
import nextMonthButtonOnClick from '../assets/arrow-right-circle-fill.svg'
import prevMonthButton from '../assets/arrow-left-circle.svg'
import prevMonthButtonOnClick from '../assets/arrow-left-circle-fill.svg'

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

    const [isDayModalOpen, setDayIsModalOpen] = useState(false);

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
        <div key={"PrevMonth-" + k} className="date-space">
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
        <div key={"NextMonth-" + p} className="date-space">
            <h3>{p}</h3>
        </div>
        );    
    }

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isAllDay, setAllDay] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [notificationReminder, setnotificationReminder] = useState(true);

    const submitEvent = async () => {
        
        const eventData = {
            startDate,
            endDate,
            isAllDay,
            eventTitle,
            eventDescription,
            notificationReminder
        };

        try {

            const response = await fetch("https://6sst5xcr02.execute-api.us-east-1.amazonaws.com/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Success:", result);
            alert("Event saved successfully!");
            
        } catch (error) {
            console.error("Failed to save event:", error);
            alert("Error saving event. Check console for details.");
        }
    };

    return (
        <>
            <div className='schedule-header'>
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
            <div>
                <h1>Start Date:</h1>
                <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <h1>End Date:</h1>
                <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                <h1>All Day:</h1>
                <input type="checkbox" value={isAllDay} onChange={(e) => setAllDay(e.target.value)}/>
                <h1>Title:</h1>
                <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)}/>
                <h1>Description:</h1>
                <input type="text" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}/>
                <h1>Remind Notification:</h1>
                <input type="checkbox" value={notificationReminder} onChange={(e) => setnotificationReminder(e.target.value)}/>
                <button type="button" onClick={submitEvent}>Submit</button>
            </div>
        </>     
    )
}