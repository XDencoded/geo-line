import Map, { Layer, Marker, Source, type LayerProps } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LocateFixed } from 'lucide-react';
import { ITEMS } from '../../db/items.data';
import { useAppSelector } from '../../hooks/useSelector';
import { useEffect } from 'react';

const roteLineStyle: LayerProps = {
  id: 'route-line',
  type: 'line',
  paint: {
    'line-color': 'red',
    'line-width': 2,
  },
};

export default function Mapass() {
	const {position} = useAppSelector(state => state.position)
	
  const geoJson: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: position.map((item) => [item.longitude, item.latitude]),
        },
        properties: {},
      },
    ],
  };

  const getPoints = position .map((item, index) => (
    <Marker style={{left: 38, top: 38, width:100, height: 100}} key={index} latitude={item.latitude} longitude={item.longitude}>
      <LocateFixed />
      <div className="item">
        <p>
          <b>Ш</b> {item.latitude}
        </p>
        <p>
          <b>Д</b> {item.longitude}
        </p>
      </div>
    </Marker>
  ));

  return (
    <Map
      initialViewState={{
        longitude: 64.36128,
        latitude: 55.575344,
        zoom: 12,
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      {getPoints}
      <Source type="geojson" data={geoJson}>
        <Layer {...roteLineStyle} />
      </Source>
    </Map>
  );
}