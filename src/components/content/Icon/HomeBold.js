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
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
