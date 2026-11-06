import React, { useState, useEffect } from 'react';

export function ProjectsSite() {
    //State for subset tracker
    const [sunData, setSunData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSunData(data.results); // Note: the API wraps the data inside a 'results' object
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }, []);
    if (loading) return <p>Loading sun data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div id="myDIV" class="header">
                <h1>To Do List</h1>

            </div>

            <ul id="myUL">
                <li>GET api for retrieving events</li>
                <li>Draw Events from api on schedule</li>
                <li>Fix month change on clicks</li>
                <li>Store Blog posts in S3 or alternative AWS data service</li>
                <li>Get blog posts via api and put them on blog page</li>
                <li>Add pop up to add events when clicking in date box</li>
            </ul>
            
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h2>Sunrise & Sunset Times</h2>
                <p><strong>Latitude:</strong> 30.23, <strong>Longitude:</strong> -85.55</p>
                <ul>
                    <li>🌅 <strong>Sunrise:</strong> {sunData.sunrise}</li>
                    <li>🌇 <strong>Sunset:</strong> {sunData.sunset}</li>

                </ul>
            </div>
        </>
    )
}