import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG = ({
  width,
  height,
  color,
}) => {
  const xmlString = `
    <svg viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.485 8.63c-.295 0-.53-.13-.773-.426L.209 5.11A.944.944 0 010 4.545c0-.408.313-.721.704-.721.252 0 .46.096.67.365L3.45 6.875 7.483.4c.174-.27.4-.4.626-.4.382 0 .747.252.747.67 0 .19-.104.399-.217.573L4.215 8.204c-.182.287-.426.426-.73.426z"
            fill="${color}"
        />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
