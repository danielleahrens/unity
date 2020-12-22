import React from 'react';
import Location from './Location.js'

import './Ceremony.css'

function Ceremony() {
  return (
    <div className="Ceremony">
      <div className="ceremony-wrapper">
        <h1>Hi, I'm Ceremony</h1>
        <p>We will be having a small ceremony with close friends and family during the week.</p>
        <a className="button">RSVP</a>
        <h2>Ceremony Details</h2>
        <Location/>
        <div>date and time info</div>
        <div>name of venue (i.e. Sunken Garden in Como Zoo Conservatory) and address</div>
        <div>Parking instructions, navigating into venue instructions</div>
        <h2>"Rehersal Dinner" Details</h2>
        <div>date and time</div>
        <div>name of restaurant (i.e. Zen Box Izakaya)</div>
        <div>parking and navigating to location instructions</div>
      </div>
    </div>
  )
}

export default Ceremony
