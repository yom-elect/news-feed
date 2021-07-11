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
    viewBox="0 0 17 17"
    xmlns="http://www.w3.org/2000/svg">
      <path  stroke="${color}" d="M.5.5h7v7h-7zM9.5.5h7v7h-7zM9.5 9.5h7v7h-7z" />
      <path d="M4 9v8M0 13h8"  stroke="${color}" stroke-linejoin="round" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
