import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG = ({
  width,
  height,
  color,
}) => {
  const xmlString = `
    <svg viewBox="1 1 18 18" xmlns="http://www.w3.org/2000/svg">
        <path
            stroke-width="2"
            stroke="${color}"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 1L1 19M1 1l18 18"
        />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
