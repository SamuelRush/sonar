/*global google*/
import React, { Component } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, DirectionsRenderer } from "react-google-maps";
class Map extends Component {
  state = {
    directions: null,
  };
  componentDidMount() {
    console.log("hit");
    const directionsService = new google.maps.DirectionsService();
    // const directionsRenderer = new google.maps.DirectionsRenderer();
    const origin = this.props.cityName;
    const destination = "3315 James Mowatt Trail, Edmonton";
    const waypts = [{ location: "Chicago" }, { location: "New York" }, { location: "Ottawa" }];
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: waypts,
        optimizeWaypoints: true
      },
      (result, status) => {
        console.log("RESULT@@@", result);
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap defaultCenter={{ lat: 40.756795, lng: -73.954298 }} defaultZoom={13}>
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
