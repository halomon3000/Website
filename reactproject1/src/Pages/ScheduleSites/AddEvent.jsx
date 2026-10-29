import { useState, useEffect } from 'react';
import '../ScheduleSite.css';
import { useLocation } from 'react-router-dom';



export function AddEvent() {
    const location = useLocation();//tracks state from previous page
    const tempDay = location.state?.startDay;
    const [startDate, setStartDate] = useState(location.state?.startDay || '');
    const [endDate, setEndDate] = useState('');
    const [isAllDay, setAllDay] = useState(true);
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
                <div><h1>{tempDay}</h1></div>
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


    