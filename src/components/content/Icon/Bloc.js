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
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
