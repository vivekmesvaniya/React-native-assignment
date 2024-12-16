import {StyleSheet, Text} from 'react-native';
import React from 'react';

const ErrorMessageComp = ({message}: {message: string}) => {
  return <Text style={messageStyle.message}>{message}</Text>;
};
const messageStyle = StyleSheet.create({
  message: {
    color: 'red',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginLeft: 10,
    marginTop: 5,
  },
});
export default ErrorMessageComp;
