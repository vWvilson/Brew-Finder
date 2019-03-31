import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.307182,
      lng: -97.755996
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCfD5CdTO_-teb1j8dvEhBdvTTykcSGRNA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={30.307182}
            lng={-97.755996}
            text={'Austin Texas'}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;