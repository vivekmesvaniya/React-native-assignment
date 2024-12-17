import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../constant/Theme';

const SplashScreen = () => {
  return (
    <View style={splashStyle.container}>
      <ActivityIndicator color={theme.primaryColor} size="large" />
    </View>
  );
};

const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
