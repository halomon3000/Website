import { useState, useEffect } from 'react';
import './AddBulkEvent.css';

import { useLocation, useNavigate } from 'react-router-dom';



export function AddBulkEvent() {
    const location = useLocation();//tracks state from previous page

    const [startDate, setStartDate] = useState(location.state?.startDay || '');
    const [startTime, setStartTime] = useState('11:00 AM');
    const [endDate, setEndDate] = useState(location.state?.startDay || '');
    const [endTime, setEndTime] = useState('1:00 PM');
    const [isAllDay, setAllDay] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [notificationReminder, setnotificationReminder] = useState(true);

    
    const navigate = useNavigate();

    const submitBulkEvent = async (e) => {
        e.preventDefault();
        const eventData = {
            startDate,
            startTime,
            endDate,
            endTime,
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
        navigate('/Schedule')
    };

    const cancelEvent = async () => {
        navigate('/Schedule')
    };

    return (
        <>
            
            <div>
                <form className = "BulkEvent Form"onSubmit={submitBulkEvent}>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={cancelEvent}>Cancel</button>
                    <textarea className = "BulkEventBox" type="text" placeholder="Paste schedule here..." value={startDate} onChange={(e) => setStartDate(e.target.value)} rows = {100} />
                </form>
            </div>



        </>
    )
}


