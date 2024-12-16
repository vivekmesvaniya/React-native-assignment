import React from 'react';
import {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
  SvgProps,
} from 'react-native-svg';

const UnderLineIcon: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.height ?? '78px'}
      height={props.width ?? '15px'}
      viewBox="0 0 78 15"
      fill="none"
      {...props}>
      <Path
        d="M77 13C58.5803 4.82197 26.3333 -2.55277 1 5.43398"
        stroke="rgba(247, 177, 116, 1)"
        strokeWidth="4px"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_381"
          x1="9.5913"
          y1="9.60833"
          x2="79.5832"
          y2="-4.85857"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F7B174" />
          <Stop offset="1" stopColor="#F3A8CE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default UnderLineIcon;
