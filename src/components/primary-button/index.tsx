import {Text, PressableProps, Pressable} from 'react-native';
import React from 'react';
import {primaryButtonStyle} from './style';

interface PrimaryButtonProps extends PressableProps {
  title: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
  return (
    <Pressable style={primaryButtonStyle.container} {...props}>
      <Text style={primaryButtonStyle.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
