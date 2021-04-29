import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { HeaderWithAuth } from './Header';
import { ConnectOrder } from './Order';
import { connect } from 'react-redux';
import { getAddressList } from '../actions';
import { drawRoute } from '../drawRoute';

class Map extends Component {
  mapContainer = React.createRef();
  map = null;

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9yYWRlbGwiLCJhIjoiY2ttcTE4b2FvMW1tdzJ3cno2Z2F0bWtzYSJ9.YlxnPWIYX1biENQ7IjiEug';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [37.6156, 55.7522],
      zoom: 9,
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
      <>
        <HeaderWithAuth />
        <ConnectOrder />
        <div data-testid='map' className='map' ref={this.mapContainer} />
      </>
    )
  }
}

export const MapConnect = connect(
  (state) => ({ address: state.address, coords: state.coords }),
  { getAddress: getAddressList }
)(Map)