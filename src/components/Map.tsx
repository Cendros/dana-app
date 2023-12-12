import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapMarker } from '../consts/map';
import { LatLngExpression } from 'leaflet';

type MapProps = {
    center: LatLngExpression
    zoom: number
    markers?: Array<Marker>
    className?: string
    onClick?: () => void
}

export type Marker = {
    coords: LatLngExpression
    popupText?: string
    onClick?: () => void
}

const Map: React.FC<MapProps> = ({ center, zoom, markers, className, onClick }) => {
    const OnClick = () => {
        useMapEvents({
            click() {
                if (onClick)
                    onClick();
            }
        });
        return <></>;
    }

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom className={className ?? ''}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <OnClick />
            { markers ? markers.map((marker, i) => (
                <Marker
                    key={i}
                    position={marker.coords}
                    icon={mapMarker}
                    eventHandlers={{
                        click: () => marker.onClick ? marker.onClick() : null
                    }}
                >
                    { marker.popupText ?
                        <Popup>{marker.popupText}</Popup>
                    : null }
                </Marker>
            )) : null }
        </MapContainer>
    )
}

export default Map;