import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVG= ({
  width,
  height,
  color,
  onPress,
}) => {
  const xmlString = `
  <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7443 4.51259C17.448 4.51268 17.1546 4.45442 16.8808 4.34112C16.607 4.22781 16.3583 4.0617 16.1487 3.85225C15.9391 3.6428 15.7728 3.39412 15.6593 3.12041C15.5459 2.8467 15.4874 2.55332 15.4873 2.25702C15.4872 1.96072 15.5455 1.6673 15.6588 1.39352C15.7721 1.11973 15.9382 0.870949 16.1476 0.661366C16.3571 0.451782 16.6058 0.285506 16.8795 0.172028C17.1532 0.058551 17.4466 9.52921e-05 17.7429 1.16568e-07C18.3413 -0.000192099 18.9153 0.23734 19.3385 0.660341C19.7618 1.08334 19.9997 1.65716 19.9999 2.25557C20.0001 2.85398 19.7626 3.42795 19.3396 3.85122C18.9166 4.2745 18.3427 4.5124 17.7443 4.51259Z" fill="#4A4F54"/>
    <path d="M10.0007 4.5126C11.2464 4.5126 12.2563 3.50275 12.2563 2.25703C12.2563 1.01132 11.2464 0.00146484 10.0007 0.00146484C8.75497 0.00146484 7.74512 1.01132 7.74512 2.25703C7.74512 3.50275 8.75497 4.5126 10.0007 4.5126Z" fill="#4A4F54"/>
    <path d="M2.25557 4.51309C3.50129 4.51309 4.51114 3.50324 4.51114 2.25752C4.51114 1.01181 3.50129 0.00195312 2.25557 0.00195312C1.00985 0.00195312 0 1.01181 0 2.25752C0 3.50324 1.00985 4.51309 2.25557 4.51309Z" fill="#4A4F54"/>
  </svg>
`;

  return (
    <SvgXml onPress={onPress} xml={xmlString} width={width} height={height} />
  );
};

export default SVG;
