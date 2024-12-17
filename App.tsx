import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Screens from './src/screens';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '324113739001-vnli9kv8cicb7lhoh7dvnl6goalsso5e.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Screens />
    </SafeAreaView>
  );
}

export default App;
