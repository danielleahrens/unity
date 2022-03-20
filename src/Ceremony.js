import './Ceremony.css';

function Ceremony() {
    return(
        <div className="Ceremony">
            <h1>Ceremony</h1>
            <div className="details">07 • 07 • 2022</div>
            <h2>Accommadations</h2>
            <div className="copy">
                Izaak & Danielle will be staying in an Airbnb in St. Paul for Wednesday and Thursday night for ease of transporation on Thursday. For folks who will be coming into town, you can either find lodging in St. Paul or extend your stay at the hotel in Coon Rapids (~30 minutes away). We don't have any hotel rooms blocked off for these days.
            </div>
            <h2>Schedule of Events</h2>
            
            <div className="ceremony-events">
                <div className="ceremony-event-wrapper">
                    <div className="ceremony-event"><h3>11:00 AM - Lunch - Red Rabbit</h3></div>
                    <div className="ceremony-event copy">788 Grand Ave St. Paul, MN 55105</div>
                    <div className="ceremony-event copy">Join us for lunch out on the patio of Red Rabbit before a busy day!</div>
                </div>
                <div className="ceremony-event-wrapper">
                    <div className="ceremony-event"><h3>Noon - 6:00 PM - Free Time</h3></div>
                    <div className="ceremony-event copy">Guests will have a free block of time, use as needed: exploring St. Paul/Minneapolis, getting ready, checking out the zoo portion of Como Zoo! Just give yourself plenty of time to arrive at the specified location at the right time - parking around Como Zoo can be challenging. We recommend trying to carpool as much as possible!</div>
                    <div className="ceremony-event copy">You're welcome to use the Airbnb Izaak & Danielle are renting to get ready.</div>
                </div>
                <div className="ceremony-event-wrapper">
                    <div className="ceremony-event"><h3>6:00 PM - Group Photos - Como Zoo</h3></div>
                    <div className="ceremony-event copy">1225 Estabrook Dr St. Paul, MN 55103 </div>
                    <div className="ceremony-event copy">Join us just outside the main entrance of the Como Zoo for group photos before our rental time begins in the Sunken Garden.</div>
                </div>
                <div className="ceremony-event-wrapper">
                    <div className="ceremony-event"><h3>6:30 - 8:00 PM - Ceremony - Sunken Garden</h3></div>
                    <div className="ceremony-event copy">1225 Estabrook Dr St. Paul, MN 55103 </div>
                    <div className="ceremony-event copy">
                        At 6:30 we'll move ourselves into the Sunken Garden in the Marjorie McNeely Conservatory. After a brief set up period, we'll commence the ceremony followed by breaking down the rental equipment and additional photos as needed.  
                    </div>
                </div>
                <div className="ceremony-event-wrapper">
                    <div className="ceremony-event"><h3>(Optional) - 8:30 PM - Dinner - Airbnb</h3></div>
                    <div className="ceremony-event copy">Address TBD</div>
                    <div className="ceremony-event copy">After the ceremony, we'll pick up some catering and have dinner back at the Airbnb house Izaak & Danielle will be staying in. Everyone is welcome to join!</div>
                </div>
            </div>
        </div>
    )
}

export default Ceremony