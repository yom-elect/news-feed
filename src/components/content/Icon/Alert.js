import React from 'react';
import {SvgXml} from 'react-native-svg';


const SVG = ({
  width,
  height,
}) => {
  const xmlString = `
  <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.549 8.47078C13.549 7.1395 13.0202 5.86274 12.0788 4.92138C11.1375 3.98002 9.86069 3.45117 8.52941 3.45117C7.19813 3.45117 5.92137 3.98002 4.98001 4.92138C4.03865 5.86274 3.5098 7.1395 3.5098 8.47078C3.5098 14.327 1 16.0002 1 16.0002H16.0588C16.0588 16.0002 13.549 14.327 13.549 8.47078Z" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.97679 19.3457C9.82971 19.5993 9.6186 19.8097 9.36459 19.956C9.11058 20.1023 8.8226 20.1793 8.52947 20.1793C8.23635 20.1793 7.94836 20.1023 7.69436 19.956C7.44035 19.8097 7.22924 19.5993 7.08215 19.3457" stroke="#4A4F54" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12.2941" cy="4.70588" r="4.70588" fill="#FF3636"/>
  </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
