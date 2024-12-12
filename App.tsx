import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import Login from './src/screens/authentication';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  const [userInfo, setUserInfo] = useState<any>(null);

  const onFacebookLogin = async () => {
    try {
      // Start the login process
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        console.log('Login cancelled');
        return;
      }

      // Once logged in, get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (data) {
        console.log('Facebook Access Token:', data.accessToken.toString());

        // You can now use the access token to fetch user info from Facebook's Graph API
        fetch(
          `https://graph.facebook.com/me?access_token=${data.accessToken.toString()}&fields=id,name,email,picture`,
        )
          .then(response => response.json())
          .then(json => {
            console.log('User data from Facebook:', json);
            setUserInfo(json);
          })
          .catch(error => {
            console.log('Error fetching user data:', error);
          });
      }
    } catch (error) {
      console.error('Facebook Login Error:', error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Ensure Google Play Services are available
      await GoogleSignin.hasPlayServices();

      // Sign in the user
      const googleInfo = await GoogleSignin.signIn();
      console.log('User Info:', googleInfo);

      // You can use userInfo.idToken to send to your server for verification
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-In in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services not available or outdated');
      } else {
        console.log('Error', error.message);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '324113739001-73sdi0mjt45i819cq8cen4f9fdh44ij2.apps.googleusercontent.com', // Replace with your actual Client ID
        offlineAccess: true,
    });
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Button title="Sign In with Google" onPress={signInWithGoogle} />
      <Button title="Login with Facebook" onPress={onFacebookLogin} />
      {userInfo && (
        <View>
          <Text>Name: {userInfo.name}</Text>
          <Text>Email: {userInfo.email}</Text>
          <Text>Profile Picture: {userInfo.picture.data.url}</Text>
        </View>
      )}
      {/* <Login/> */}
    </SafeAreaView>
  );
}

export default App;
