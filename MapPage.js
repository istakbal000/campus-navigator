
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapPage() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/locations')
            .then(res => res.json())
            .then(setLocations);
    }, []);

    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map(loc => (
                <Marker key={loc._id} position={[loc.coordinates.lat, loc.coordinates.lng]}>
                    <Popup>{loc.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapPage;
