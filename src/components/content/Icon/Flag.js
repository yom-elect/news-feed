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
    <path d="M2.6665 10.0002C2.6665 10.0002 3.33317 9.3335 5.33317 9.3335C7.33317 9.3335 8.6665 10.6668 10.6665 10.6668C12.6665 10.6668 13.3332 10.0002 13.3332 10.0002V2.00016C13.3332 2.00016 12.6665 2.66683 10.6665 2.66683C8.6665 2.66683 7.33317 1.3335 5.33317 1.3335C3.33317 1.3335 2.6665 2.00016 2.6665 2.00016V10.0002Z" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.6665 14.6667V10" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

  return (
    <SvgXml onPress={onPress} xml={xmlString} width={width} height={height} />
  );
};

export default SVG;
