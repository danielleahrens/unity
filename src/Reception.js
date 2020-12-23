import React, { Component } from 'react';
import Location from './Location.js'
import './Reception.css'

class Reception extends Component {

  state = {
    receptionLocation : {
      mapCenter : {
          lat : 45.324192,
          lng: -93.304084
      },
      mapZoom : 10
    }
  }

  render() {
    return (
      <div className="Reception">
        <div className="reception-wrapper">
          <h1 className="reception-h1">Celebrate With Us!</h1>
          <p className="reception-copy">We will be having an open house style reception at Danielle's parent's house. Feel free to come and go as you please in your garden party attire!</p>
          <a className="button rsvp-button">RSVP</a>
          <div className="reception-details">
            <h2>Reception Details</h2>
            <p><b>When:</b> ##:## PM to ##:## PM on XXX the ##th of XXXXXXXXX</p>
            <p><b>Where:</b> Dave and Lilly Ahrens's house</p>
            <p><b>Address:</b> <a href="https://www.google.com/maps/place/19568+Drake+St+NW,+Oak+Grove,+MN+55011/@45.3240745,-93.30673,17z/data=!3m1!4b1!4m5!3m4!1s0x52b317545776f07b:0x7ae350e1f79e423a!8m2!3d45.3240745!4d-93.3045413">19568 Drake St NW Oak Grove MN 55011</a></p>
            <p><b>Parking and Carpooling:</b> We are hosting this reception in a neighborhood, please consider carpooling where possible. There will be a bus from the hotel available to bring folks to and from the reception. The bus will leave the hotel at ##:## PM, ##:## PM and ##:## PM and will leave the reception at ##:## PM, ##:## PM and ##:## PM.</p>
            <Location location = {this.state.receptionLocation}/>
            <p><b>Schedule:</b>
              <li>We will have the XXXX XXXXXX food truck parked outside from ##:## to ##:## PM, vouchers will be available for 1 entree and 1 side per guest, additional food can be purchased from the truck. Snacks and beverages will be available at no cost all day.</li>
              <li>Live music will start at ##:## PM through ##:## PM.</li>
              <li>Yard game and kid-friendly activities will be available all day;</li>
              <li>the fire pit (with s'mores!) will be lit at ##:## PM</li>
            </p>
          </div>
        </div>
      </div>
    )
  }
}


export default Reception
