import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapMarker } from '../consts/map';
import { LatLngExpression } from 'leaflet';

type MapProps = {
    center: LatLngExpression
    zoom: number
    markers?: Array<Marker>
    className?: string
}

export type Marker = {
    coords: LatLngExpression
    popupText?: string
}

const Map: React.FC<MapProps> = ({ center, zoom, markers, className }) => {
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom className={className ?? ''}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { markers ? markers.map((marker, i) => (
                <Marker key={i} position={marker.coords} icon={mapMarker}>
                    { marker.popupText ?
                        <Popup>{marker.popupText}</Popup>
                    : null }
                </Marker>
            )) : null }
        </MapContainer>
    )
}

export default Map;