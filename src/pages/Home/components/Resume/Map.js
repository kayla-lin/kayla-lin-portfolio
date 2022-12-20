import React, { memo } from 'react';
import { Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const Map = () => {
  return (
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map(geo => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#2D3748"
            style={{
              default: { outline: 'none' },
              hover: { outline: 'none' },
              pressed: { outline: 'none' },
            }}
          />
        ))
      }
    </Geographies>
  );
};

export default memo(Map);
