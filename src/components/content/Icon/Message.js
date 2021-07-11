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
    stroke-width="1.7"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
