import { useState, useEffect } from 'react';
import '../ScheduleSite.css';
import { useLocation, useNavigate } from 'react-router-dom';



export function AddEvent() {
    const location = useLocation();//tracks state from previous page

    const tempDay = location.state?.startDay;
    const [startDate, setStartDate] = useState(location.state?.startDay || '');
    const [startTime, setStartTime] = useState('11:00 AM');
    const [endDate, setEndDate] = useState(location.state?.startDay || '');
    const [endTime, setEndTime] = useState('1:00 PM');
    const [isAllDay, setAllDay] = useState(true);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [notificationReminder, setnotificationReminder] = useState(true);

    const handleIsAllDayClick = (event) => {//If I try to change this in the input tag it becomes unclickable
        setAllDay(event.target.checked);
    };

    const navigate = useNavigate();

    const submitEvent = async () => {

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
            <div><h1>{tempDay}</h1></div>
            <div>
                <form onSubmit={submitEvent}>
                    <h1>Start Date:</h1>
                    <input className = "DateInput" type="text" placeholder="yyyy-MM-dd" value={startDate} onChange={(e) => setStartDate(e.target.value)}  required pattern="20[234]\d-\d?\d-\d?\d"/>
                    { !isAllDay && (
                        <div>
                            <h1>Start Time:</h1>
                            <input className = "TimeInput" type="text" placeholder="HH:mm (AM/PM)" value={startTime} onChange={(e) => setStartTime(e.target.value)} required pattern="\d?\d:\d\d [AP]M"/>
                            <h1>End Date:</h1>
                            <input className = "DateInput" type="text" placeholder="yyyy-MM-dd" value={endDate} onChange={(e) => setEndDate(e.target.value)} required pattern="20[234]\d-\d?\d-\d?\d" />
                            <h1>End Time:</h1>
                            <input className = "TimeInput" type="text" placeholder="HH:mm (AM/PM)" value={endTime} onChange={(e) => setEndTime(e.target.value)} required pattern="\d?\d:\d\d [AP]M"/>
                        </div>
                    )}
                    <h1>All Day:</h1>
                    <input type="checkbox" checked={isAllDay} onChange={handleIsAllDayClick} />
                    <h1>Title:</h1>
                    <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required/>
                    <h1>Description:</h1>
                    <input type="text" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
                    <h1>Remind Notification:</h1>
                    <input type="checkbox" value={notificationReminder} onChange={(e) => setnotificationReminder(e.target.value)} />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={cancelEvent}>Cancel</button>
                </form>
            </div>



        </>
    )
}


