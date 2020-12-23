import React, { Component } from 'react';
import Location from './Location.js'

import './Ceremony.css'

class Ceremony extends Component {

  state = {
    ceremonyLocation : {
      mapCenter : {
          lat : 44.981767,
          lng: -93.153643
      },
      mapZoom : 17
    },
    dinnerLocation : {
      mapCenter : {
          lat : 44.978186,
          lng: -93.258207
      },
      mapZoom : 17
    }
  }

  render() {
    return (
      <div className="Ceremony">
        <div className="ceremony-wrapper">
          <h1>Hi, I'm Ceremony</h1>
          <p>We will be having a small ceremony with close friends and family during the week.</p>
          <a className="button">RSVP</a>
          <div className="ceremony-details">
            <h2>Ceremony Details</h2>
            <p>When: ##:## PM on XXX the ##th of XXXXXXXXX</p>
            <p>Where: Sunken Garden in the Como Zoo Conservatory</p>
            <p>Address: <a href="https://www.google.com/maps/place/1225+Estabrook+Dr,+St+Paul,+MN+55103/@44.982786,-93.1555852,15.16z/data=!4m5!3m4!1s0x52b32b11a2492bd7:0xe70fc80563b1cc08!8m2!3d44.9818594!4d-93.1514023">1225 Estabrook Dr, St Paul, MN 55103</a></p>
            <p>Carpooling Plan: we are renting a large passenger van for the day to help reduce the number of vehicles driving into St. Paul and Downtown Minneapolis.</p>
            <Location location = {this.state.ceremonyLocation}/>
          </div>
          <div className="ceremony-dinner-details">
            <h2>"Rehersal Dinner" Details</h2>
            <div>date and time</div>
            <div>name of restaurant (i.e. Zen Box Izakaya)</div>
            <div>parking and navigating to location instructions</div>
            <Location location = {this.state.dinnerLocation}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Ceremony
