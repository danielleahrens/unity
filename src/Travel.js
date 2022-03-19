import './Travel.css';

function Travel() {
    return(
        <div className="Travel">
            <div className="hotels">
                <h1>Hotels</h1>
                <p>The two hotels are right across the parking lot from one another. There are a small number of rooms we were able to reserve at the Wingate, most available rooms will be at the AmericInn.</p>
                <div className="hotel">
                    <h2>AmericInn - Coon Rapids</h2>
                    <div className="travel-content-wrapper">
                        <h4 className="travel-content-key">Address:</h4>
                        <div className="travel-content-value">
                            <p>3430 Northdale Blvd NW</p>
                            <p> Coon Rapids, MN 55448</p>
                        </div>
                    </div>
                    
                    <div className="travel-content-wrapper">
                        <h4 className="travel-content-key">Contact:</h4>
                        <div className="travel-content-value">
                            <a href="tel:1-763-323-0010">(763) 323-0010</a>
                        </div>
                    </div>
                    <div className="travel-content-wrapper">
                        <h4 className="travel-content-key">Booking:</h4>
                        <p className="travel-content-value text-block">
                            call to book under the Ahrens/Lauer block of rooms
                        </p>
                    </div>
                </div>
                <div className="hotel">
                    <h2>Wingate by Wyndham - Coon Rapids</h2>
                    <div className="travel-content-wrapper">
                        <h4 className="travel-content-key">Address:</h4>
                        <div className="travel-content-value">
                            <p>3420 Northdale Blvd NW </p>
                            <p> Coon Rapids, MN 55448</p>
                        </div>
                    </div>
                    <div className="travel-content-wrapper">
                        <h4 className="travel-content-key">Contact:</h4>
                        <div className="travel-content-value">
                            <a href="tel:1-763-576-0700">(763) 576-0700</a>
                        </div>
                    </div>
                    <div className="travel-content-wrapper">
                        <h4 className="travel-content-key">Booking:</h4>
                        <div className="travel-content-value">
                            <a href="https://www.wyndhamhotels.com/wingate/coon-rapids-minnesota/wingate-coon-rapids/rooms-rates?&checkInDate=07/08/2022&checkOutDate=07/10/2022&groupCode=cgalwg">link to book with group code</a>
                            <p>group code: cgalwg</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airports">
                <h1>Airport</h1>
                <div className="airport">
                    <h2>Minneapolis - St. Paul International Airport (MSP)</h2>
                    <p>The Minneapolis - St.Paul airport has many flights in and out each day. It is about 40 minutes away from the Coon Rapids hotels.</p>
                    <p>If you'd prefer to not rent a vehicle, it is fairly easy to navigate the Twin Cities via ride share (Uber, Lyft). If you are interested in exploring The Cities while you're here, the light rail goes from the airport into downtown Minneapolis and St. Paul.</p>
                </div>
            </div>
        </div>
    )
}

export default Travel