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
          <h1 className="ceremony-h1">Our Wedding Day</h1>
          <p className="ceremony-copy">We will be having a small ceremony with close family during the week. We look forward to celebrating with all our friends and family at our open house reception on the following Saturday!</p>
          <a className="rsvp-button" onClick={() => {this.props.ceremonyCallback('Rsvp')}}>RSVP</a>
          <div className="ceremony-details">
            <h2>Ceremony Details</h2>
            <p><b>When:</b> ##:## PM on XXX the ##th of XXXXXXXXX</p>
            <p><b>Where:</b> Sunken Garden in the Como Zoo Conservatory</p>
            <p><b>Address:</b> <a href="https://www.google.com/maps/place/1225+Estabrook+Dr,+St+Paul,+MN+55103/@44.982786,-93.1555852,15.16z/data=!4m5!3m4!1s0x52b32b11a2492bd7:0xe70fc80563b1cc08!8m2!3d44.9818594!4d-93.1514023">1225 Estabrook Dr, St Paul, MN 55103</a></p>
            <p><b>Carpooling Plan:</b> we are renting a large passenger van for the day to help reduce the number of vehicles driving into St. Paul and Downtown Minneapolis.</p>
            <p><b>Parking:</b> Passenger drop off and parking locations are marked on the map below</p>
            <Location location = {this.state.ceremonyLocation}/>
          </div>
          <div className="ceremony-dinner-details">
            <h2>After Ceremony Dinner Details</h2>
            <p><b>When:</b> ##:## PM, after the ceremony. Feel free to wander down by the river or grab a drink at the bar if you're early!</p>
            <p><b>Where:</b> Zen Box Izakaya</p>
            <p><b>Address:</b> <a href="https://www.google.com/maps/place/Zen+Box+Izakaya/@44.979132,-93.2605827,17.15z/data=!4m5!3m4!1s0x0:0x750a2017b381f1c2!8m2!3d44.9783308!4d-93.2592018">602 S Washington Ave, Minneapolis, MN 55415</a></p>
            <p><b>Parking:</b> There is paid street parking surrounding the restaurant, the nearby parking garages are marked on the map below.</p>
            <Location location = {this.state.dinnerLocation}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Ceremony
