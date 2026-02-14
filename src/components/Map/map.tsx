import { MapPin } from 'lucide-react'
import 'maplibre-gl/dist/maplibre-gl.css'
import Map, {
  Layer,
  Marker,
  Source,
  type LayerProps
} from 'react-map-gl/maplibre'

import { useRef } from 'react'
import { useAppSelector } from '../../hooks/useSelector'

const roteLineStyle: LayerProps = {
  id: 'route-line',
  type: 'line',
  paint: {
    'line-color': 'red',
    'line-width': 2
  }
}

export default function Mapass() {
  const { points, currentPoint } = useAppSelector(state => state.point)
  const refMap = useRef(null)

  const geoJson: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: points.map(item => [item.longitude, item.latitude])
        },
        properties: {}
      }
    ]
  }

  const getPoints = points.map((item, index) => (
    <Marker
      style={{ left: 38, top: 24, width: 100, height: 100 }}
      key={index}
      latitude={item.latitude}
      longitude={item.longitude}
    >
      <MapPin color="red" strokeWidth={2} />
      <div className="item">
        <p>
          <b>Ш</b> {item.latitude}
        </p>
        {'|'}
        <p>
          <b>Д</b> {item.longitude}
        </p>
      </div>
    </Marker>
  ))

  return (
    <Map
      ref={refMap}
      initialViewState={{
        longitude: currentPoint ? currentPoint.longitude : 64.36128,
        latitude: currentPoint ? currentPoint.latitude : 55.575344,
        zoom: 12
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      {getPoints}
      <Source type="geojson" data={geoJson}>
        <Layer {...roteLineStyle} />
      </Source>
    </Map>
  )
}
