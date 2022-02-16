import React, { useEffect, useState } from 'react';
import ReactMap, { useMap, ViewStateChangeEvent } from 'react-map-gl';

interface ViewStateProps {
  longitude: number;
  latitude: number;
  zoom: number;
}

const Map: React.FC = () => {
  const [viewState, setViewState] = useState<ViewStateProps>({
    longitude: -38.7819936,
    latitude: -12.9777334,
    zoom: 7
  });
  const { basemap } = useMap();

  const handleNewViewState = (event: ViewStateChangeEvent) => {
    setViewState(event.viewState);
  }

  useEffect(() => {
    if (basemap) {
      basemap.flyTo({ center: [-40.893, -12.163], screenSpeed: 0.3, zoom: 7 })
    }
  }, [basemap])

  return (
    <ReactMap
      id="basemap"
      {...viewState}
      onMove={event => handleNewViewState(event)}
      style={{ width: '100%', height: 600 }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
    />
  );
}

export default Map;
