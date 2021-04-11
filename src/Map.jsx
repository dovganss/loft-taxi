import React, { Component } from "react";
import mapboxgl from 'mapbox-gl'

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZG92Z2Fuc3MiLCJhIjoiY2ttdGNlZm5oMHE1NTJwcG00NHd6M2ozMCJ9.p-TQBslvtR6cjKpI1_69yw";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126], // LED
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
        <div className="map-wrapper">
          <div className="map" ref={this.mapContainer} />
        </div>
    );
  }
}
