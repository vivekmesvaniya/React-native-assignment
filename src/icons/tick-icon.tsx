import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const TickIcon: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '20'}
      height={props.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <Path
        d="M16.6667 5L7.49999 14.1667L3.33333 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TickIcon;
