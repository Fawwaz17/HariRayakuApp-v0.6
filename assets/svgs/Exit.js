import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgExit = props => (
  <Svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M16 16V18.5C16 19.163 15.7366 19.7989 15.2678 20.2678C14.7989 20.7366 14.163 21 13.5 21H3.5C2.83696 21 2.20107 20.7366 1.73223 20.2678C1.26339 19.7989 1 19.163 1 18.5V3.5C1 2.83696 1.26339 2.20107 1.73223 1.73223C2.20107 1.26339 2.83696 1 3.5 1H13C14.3806 1 16 2.11937 16 3.5V6"
      stroke="black"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20 16L25 11L20 6"
      stroke="black"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path d="M8 11H24" stroke="black" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
);

export default SvgExit;
