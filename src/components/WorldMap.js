import { geoMercator, geoPath } from 'd3-geo';
import React from 'react';
import './App.css';
import { worldMapData } from './data'; // geojson

const WorldMap = () => {
  const projection = geoMercator();
  const path = geoPath().projection(projection);
  const countries = worldMapData.features.map((d, i) => (
    <path key={`path${i}`} d={path(d)} className="countries" />
  ));

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={500} height={500}>
      {countries}
    </svg>
  );
};

export default WorldMap;
