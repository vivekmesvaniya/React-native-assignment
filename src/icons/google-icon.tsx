import React from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

const GoogleIcon: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Rect width="24" height="24" fill="white" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9999 23.4998C15.1049 23.4998 17.7081 22.47 19.6108 20.7137L15.8942 17.8282C14.8644 18.5182 13.5472 18.9259 11.9999 18.9259C9.00467 18.9259 6.46945 16.903 5.56513 14.1848H1.72308V17.1644C3.61536 20.9228 7.50445 23.4998 11.9999 23.4998Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9999 5.07386C13.6883 5.07386 15.2042 5.65409 16.396 6.79364L19.6944 3.49523C17.7029 1.63955 15.0997 0.5 11.9999 0.5C7.50445 0.5 3.61536 3.07705 1.72308 6.83545L5.56513 9.815C6.46945 7.09682 9.00468 5.07386 11.9999 5.07386Z"
        fill="#EA4335"
      />
    </Svg>
  );
};

export default GoogleIcon;