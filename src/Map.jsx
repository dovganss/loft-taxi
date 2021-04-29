import React, { Component } from "react";
import mapboxgl from 'mapbox-gl'
import { HeaderWithConnect } from "./Header";
import { MapComponentWithConnect } from "./components/MapComponent";
import { connect } from 'react-redux';
import { drawRoute } from "./drawRoute";
import { getAddressList } from './actions';

export class Map extends Component {
  mapContainer = React.createRef();
  map = null;


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

  removeMapLayer = (map) => {
    const mapLayer = map.getLayer('route');
    if (mapLayer) {
      map.removeLayer('route').removeSource('route');
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.coords.coords !== prevProps.coords.coords) {
      this.removeMapLayer(this.map);
      drawRoute(this.map, this.props.coords.coords)
    }
  }

  render() {
    return (

        <div className="map-wrapper">
              < HeaderWithConnect /> 
          <div className="map" ref={this.mapContainer} />
          < MapComponentWithConnect />
   
   
        </div>
    );
  }
}

export const MapWithConnect = connect(
  state => ({address: state.address, coords: state.coords }),         
  { getAddress: getAddressList },
)(Map);
