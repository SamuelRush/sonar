import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDAR8ubrq24oKLzNQathKEL02qJ_4gXqnI&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width: `100%`, height: `750px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <React.Fragment>
        <Marker position={{ lat: 51.19, lng: -114.678 }} />
        <Marker position={{ lat: -10.397, lng: 150.644 }} />
        {/* var marker = new google.maps.Marker({position: { lat: -10.397, lng: 150.644 }, map: map}); */}
      </React.Fragment>
    )}
  </GoogleMap>
));

export default MyMapComponent;
