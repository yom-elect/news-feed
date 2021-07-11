import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG = ({
  width,
  height,
  color,
}) => {
  const xmlString = `
    <svg
    fill="none"
    stroke="${color}"
    stroke-width="1.8"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <polyline points="16 7 16 17 21 17 16 7" />
        <polyline points="8 7 8 17 3 17 8 7" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
