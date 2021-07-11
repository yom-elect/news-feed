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
    stroke-width="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#fff" />
        <path d="M8 0a8 8 0 010 16V0z" fill="#2F313B" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
