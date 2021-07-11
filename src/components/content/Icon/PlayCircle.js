import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '@shopify/restyle';

const SVG = ({
  width,
  height,
  color,
}) => {
  const theme = useTheme();
  const {primary} = theme.colors;

  const xmlString = `
    <svg
    fill="${primary}"
    stroke="${color}"
    stroke-width="1.2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8l6 4-6 4V8z" />
    </svg>
`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
