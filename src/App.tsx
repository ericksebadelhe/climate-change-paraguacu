import React from 'react';
import { MapProvider } from 'react-map-gl';
import Home from './screens/Home';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <MapProvider>
      <Home />
    </MapProvider>
  );
}

export default App;
