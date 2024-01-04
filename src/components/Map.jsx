import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

export default function Map() {
  // eslint-disable-next-line
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    })

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })
  return (
    <>
      <div className="map" id="map">
        <h1 style={{ color: '#cf0d9f' }}>Map</h1>
        <div ref={mapContainer} className="map-container">
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
      </div>
    </>
  )
}
