import React, { Component } from 'react';
import Location from './Location.js'
import './OutOfTowners.css'

class OutOfTowners extends Component {

  state = {
    hotelLocation : {
      mapCenter : {
          lat : 44.978186,
          lng: -93.258207
      },
      mapZoom : 17
    }
  }

  render() {
    return (
      <div className="OutOfTowners">
        <div className="oot-wrapper">
          <h1 className="oot-h1">Welcome to the <br/>Twin Cities!</h1>
          <div className="hotel-details">
            <h2>Hotel Details</h2>
            <p><b>Where:</b> Hotel Name Inn</p>
            <p><b>Address:</b> <a href="https://www.google.com/maps/place/Zen+Box+Izakaya/@44.979132,-93.2605827,17.15z/data=!4m5!3m4!1s0x0:0x750a2017b381f1c2!8m2!3d44.9783308!4d-93.2592018">602 S Washington Ave, Minneapolis, MN 55415</a></p>
            <p><b>Reserving a Room:</b> <a href="">Make your reservation</a> by ##XXX## and use code "XXXXXXXXX" to get a room in our reserved block.</p>
            <Location location = {this.state.hotelLocation}/>
          </div>
          <h2>Looking for something to do while you're in town?</h2>
          <p className="oot-copy">Here are some activities that we have enjoyed while living in the Twin Cities:</p>
          <ul>
            <li>Walker Art Scupture Garden</li>
            <li>Minneapolis Institute of Art</li>
            <li>Mall of America</li>
            <li>Minnehaha Park</li>
            <li>Walking paths along the Mississippi, the Hennepin bridge to Stone Arch Bridge loop is lovely.</li>
            <li>Science Museum - St. Paul</li>
            <li>Como Zoo - St. Paul</li>
          </ul>
          <p className="oot-copy">For those with Kids:</p>
          <ul>
            <li>Great Wolf Lodge, formally known as the Water Park of America</li>
            <li>Nickelodeon Theme Park (in Mall of America)</li>
            <li>Children's Museum - St. Paul</li>
          </ul>
          <p className="oot-copy">Our Favorite Restaurants & Breweries:</p>
          <ul>
            <li>Zen Box Izakaya - Downtown/North East</li>
            <li>Red Cow - Downtown/North East</li>
            <li>Young Joni - Downtown/North East</li>
            <li>Brasa - Downtown/North East</li>
            <li>Anchor's Fish and Chips - Downtown/North East</li>
            <li>There are too many Breweries to name in North East! You're sure to have a good time at any of them!</li>
            <li>Moto-i Ramen and Sake - Uptown</li>
            <li>Cossetta's - St. Paul</li>
            <li>Pig Ate My Pizza - Robbinsdale</li>
            <li>Wollet's Bakery - Robbinsdale</li>
            <li>Wicked Wort Brewery - Robbinsdale</li>
            <li>Nong's Thai - Golden Valley</li>
            <li>Ten Sushi - Maple Grove</li>
            <li>Omni Brewing - Maple Grove</li>
          </ul>
        </div>
      </div>
    )
  }
  }


export default OutOfTowners
