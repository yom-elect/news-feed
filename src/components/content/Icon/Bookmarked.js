import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG = ({
  width,
  height,
  color,
}) => {
  const xmlString = `
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4444 17L7.22222 12.5556L1 17V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H11.6667C12.1382 1 12.5903 1.1873 12.9237 1.5207C13.2571 1.8541 13.4444 2.30628 13.4444 2.77778V17Z" fill="#333333" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
