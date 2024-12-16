/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  Text,
  Pressable,
  Animated,
  ViewStyle,
  PressableProps,
} from 'react-native';
import TickIcon from '../../icons/tick-icon';
import {segmentButtonStyle} from './style';

interface SegmentButtonProps extends PressableProps {
  title: string;
  height?: number;
  width?: number;
  buttonStyle?: ViewStyle;
  textStyle?: object;
  selected?: boolean;
}

const SegmentButtonComp: React.FC<SegmentButtonProps> = props => {
  const backgroundColorAnim = useRef(
    new Animated.Value(props.selected ? 1 : 0),
  ).current;
  const tickScaleAnim = useRef(
    new Animated.Value(props.selected ? 1 : 0),
  ).current;

  useEffect(() => {
    Animated.timing(backgroundColorAnim, {
      toValue: props.selected ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(tickScaleAnim, {
      toValue: props.selected ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [props.selected]);

  const interpolatedBackgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(244, 246, 247, 1)', 'rgba(247, 177, 116, 1)'],
  });

  return (
    <Animated.View
      style={[
        segmentButtonStyle.container,
        props.buttonStyle,
        {backgroundColor: interpolatedBackgroundColor},
      ]}>
      <Pressable
        {...props}
        style={[
          {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
        ]}>
        <Text
          style={{
            ...segmentButtonStyle.buttonText,
            ...props.textStyle,
            color: props.selected
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(79, 94, 123, 1)',
          }}>
          {props.title}
        </Text>
        <Animated.View
          style={{
            transform: [{scale: tickScaleAnim}],
            opacity: tickScaleAnim,
          }}>
          <TickIcon />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

export default SegmentButtonComp;
