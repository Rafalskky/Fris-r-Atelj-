'use client'
import { useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const Map = ({ location }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
  });

  useEffect(() => {
    if (isLoaded && markerRef.current === null) {
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapRef.current,
        title: 'Frisör Ateljé',
      });
      markerRef.current = marker;
    }
  }, [isLoaded, location]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-96 ">
      <GoogleMap
        ref={mapRef}
        center={location}
        zoom={15}
        mapContainerClassName="w-full h-full rounded-lg"
      />
    </div>
  );
};

export default Map;