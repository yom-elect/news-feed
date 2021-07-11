import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG = ({
  width,
  height,
  color,
}) => {
  const xmlString = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 11L11 1" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 1H11V11" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
