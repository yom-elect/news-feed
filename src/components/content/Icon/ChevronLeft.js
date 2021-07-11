import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG= ({
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
