"use client"
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


function Map() {
    return (
        <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[42.6704, 23.3510]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[42.6704, 23.3510]}>
                <Popup>
                    World Trade Center 36, Dragan Tsankov blvd. Sofia 1057, Bulgaria.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
