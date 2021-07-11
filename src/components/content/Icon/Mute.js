import React from 'react';
import {SvgXml} from 'react-native-svg';


const SVG = ({
  width,
  height,
  color,
  onPress,
}) => {
  const xmlString = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.3335 3.3335L4.00016 6.00016H1.3335V10.0002H4.00016L7.3335 12.6668V3.3335Z" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.3335 6L11.3335 10" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.3335 6L15.3335 10" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`;

  return (
    <SvgXml onPress={onPress} xml={xmlString} width={width} height={height} />
  );
};

export default SVG;
