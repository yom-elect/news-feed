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
    <path d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z" stroke="#4A4F54"/>
    <path d="M3.3335 12.6668L12.6668 3.3335" stroke="#4A4F54"/>
  </svg>  
`;

  return (
    <SvgXml onPress={onPress} xml={xmlString} width={width} height={height} />
  );
};

export default SVG;
