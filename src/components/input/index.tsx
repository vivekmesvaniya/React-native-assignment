import {View, TextInputProps, TextInput} from 'react-native';
import React from 'react';
import {inputStyle} from './style';

const InputComp: React.FC<TextInputProps> = props => {
  return (
    <View style={inputStyle.container}>
      <TextInput
        style={inputStyle.input}
        {...props}
      />
    </View>
  );
};

export default InputComp;
