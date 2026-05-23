'use client';

import React, { useState } from 'react';
import {
  Map,
  Marker,
  useMap,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';
import { Plus, Minus, Maximize2 } from 'lucide-react';

interface Props {
  lat: number;
  lng: number;
  address: string;
}

const CustomMapControls = () => {
  const map = useMap();
  
  const handleZoomIn = () => map?.setZoom((map.getZoom() || 0) + 1);
  const handleZoomOut = () => map?.setZoom((map.getZoom() || 0) - 1);
  const handleFullscreen = () => {
    const mapDiv = map?.getDiv();
    if (mapDiv?.requestFullscreen) {
      mapDiv.requestFullscreen();
    }
  };

  return (
    <div className="flex flex-col gap-2 m-4">
      <button 
        onClick={handleFullscreen}
        className="p-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl shadow-lg minkea-shadow transition-colors"
        title="Pantalla completa"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
      <div className="flex flex-col bg-white rounded-xl shadow-lg minkea-shadow overflow-hidden">
        <button 
          onClick={handleZoomIn}
          className="p-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100 transition-colors"
          title="Acercar"
        >
          <Plus className="w-5 h-5" />
        </button>
        <button 
          onClick={handleZoomOut}
          className="p-3 hover:bg-gray-50 text-gray-700 transition-colors"
          title="Alejar"
        >
          <Minus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const AirbnbMarker = ({ address }: { address: string }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Label */}
      <div className="absolute bottom-full mb-2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100 whitespace-nowrap">
        <span className="text-xs font-black text-gray-900">Punto de encuentro</span>
      </div>
      
      {/* The "Pin" Style from Airbnb: Black circle with white dot */}
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/20">
        <div className="w-2.5 h-2.5 bg-white rounded-full" />
      </div>
      
      {/* Arrow pointing down */}
      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black -mt-0.5" />
    </div>
  );
};

export const MeetingPointMap: React.FC<Props> = ({ lat, lng, address }) => {
  const [zoom, setZoom] = useState(15);

  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden group">
      <Map
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
        disableDefaultUI={true}
        gestureHandling={'greedy'}
        mapId="minkea_meeting_point" // Requiere configuración en Google Console para Advanced Markers
      >
        {/* Simple Marker for now if mapId is not configured, or AdvancedMarker if it is */}
        <AdvancedMarker position={{ lat, lng }}>
          <AirbnbMarker address={address} />
        </AdvancedMarker>

        <MapControl position={ControlPosition.RIGHT_TOP}>
          <CustomMapControls />
        </MapControl>
      </Map>
      
      {/* Top Left Search Icon Overlay (Airbnb Style) */}
      <div className="absolute top-4 left-4">
        <div className="p-3 bg-white rounded-full shadow-lg minkea-shadow text-gray-700">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
        </div>
      </div>
    </div>
  );
};
