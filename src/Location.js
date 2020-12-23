import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import './Location.css'


class Location extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };


 render() {

  const style = {
    width: '600px',
    height: '600px',
    overflow: 'scroll',
    position: 'relative',
  }


 return (
 <div className="Location" id="mapBox">
   <Map
    google={this.props.google}
    onClick={this.onMapClicked}
    zoom={this.props.location.mapZoom}
    initialCenter={{
    lat: this.props.location.mapCenter.lat,
    lng: this.props.location.mapCenter.lng
    }}
    style={style}>

    <Marker
      name={'Drop Off'}
      position={{lat: 44.980892, lng: -93.151798}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.980232, lng: -93.152642}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.982033, lng: -93.155268}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.983195, lng: -93.155936}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.980396, lng: -93.153981}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Sunken Garden'}
      position={{lat: 44.981474, lng: -93.151240}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.978305, lng: -93.256985}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.977863, lng: -93.256014}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.977074, lng: -93.255577}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Parking'}
      position={{lat: 44.978818, lng: -93.259656}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Zen Box Izakaya'}
      position={{lat: 44.978291, lng: -93.259525}}
      onClick={this.onMarkerClick} />
    <Marker
      name={'Dave and Lilly\'s House'}
      position={{lat: 45.324192, lng: -93.304084}}
      onClick={this.onMarkerClick}/>
    <InfoWindow
      options={{maxWidth:150}}
      marker={this.state.activeMarker}
      onClose={this.onInfoWindowClose}
      visible={this.state.showingInfoWindow}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
    </InfoWindow>
  </Map>
 </div>
 );
 }
}
export default GoogleApiWrapper({
 apiKey: ('AIzaSyDGidYloT_YCvEwmntv5ewu5VyyLq0Xu1I')
})(Location);
