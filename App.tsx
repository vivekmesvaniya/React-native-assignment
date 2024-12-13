import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import Login from './src/screens/authentication';
import {authorize} from 'react-native-app-auth';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  const [userInfo, setUserInfo] = useState<any>(null);
  const [googleInfo, setGoogleInfo] = useState<any>(null);
  const insRef = useRef();

  const linkedInConfig = {
    clientId: '77o1zvcvg4hv20',
    clientSecret: 'WPL_AP1.MJuiR7h8SkWUheQZ.uIFgRw==',
    redirectUrl: 'http://project/auth/linkedin/callback', // For example: https://www.yourapp.com/auth/linkedin/callback
    scopes: ['r_liteprofile', 'r_emailaddress'], // Permissions you need
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
      tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
      revocationEndpoint: 'https://www.linkedin.com/oauth/v2/revoke',
    },
  };

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
      const googleInfoData = await GoogleSignin.signIn();
      setGoogleInfo(googleInfoData);

      // You can use userInfo.idToken to send to your server for verification
    } catch (error: any) {
      console.log(error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Alert', 'User cancelled the login process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Alert', 'Sign-In in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Alert', 'Google Play Services not available or outdated');
      } else {
        Alert.alert('Alert', 'Something Went Wrong');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      // setIsLoggedIn(false);
      console.log('Logged out from Google');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleLinkedInLogin = async () => {
    try {
      const authState = await authorize(linkedInConfig);
      console.log(authState);
      // You can now use the access token to fetch user profile
      fetchUserProfile(authState.accessToken);
    } catch (error) {
      console.log('LinkedIn login failed', error);
      Alert.alert('Login failed', 'Unable to login with LinkedIn.');
    }
  };

  const fetchUserProfile = async accessToken => {
    try {
      const response = await fetch('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const profile = await response.json();
      console.log('LinkedIn profile:', profile);

      // setUserInfo(profile);
    } catch (error) {
      console.log('Error fetching LinkedIn profile', error);
      Alert.alert('Error', 'Failed to fetch user profile.');
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '324113739001-vnli9kv8cicb7lhoh7dvnl6goalsso5e.apps.googleusercontent.com', // Replace with your actual Client ID
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
          <Text style={{color: 'black'}}>Name: {userInfo.name}</Text>
          <Text style={{color: 'black'}}>Email: {userInfo.email}</Text>
          <Image
            source={{uri: userInfo.picture.data.url}}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: 'black'}}>
            Profile Picture: {userInfo.picture.data.url}
          </Text>
        </View>
      )}
      {/* {googleInfo && googleInfo.data && googleInfo?.data.user && (
        <View>
          <Text style={{color: 'black'}}>
            Name: {googleInfo.data.user.name}
          </Text>
          <Text style={{color: 'black'}}>
            Email: {googleInfo.data.user.email}
          </Text>
          {googleInfo.data.user.photo && (
            <Image
              source={{uri: googleInfo.data.user.photo}}
              style={{height: 50, width: 50}}
            />
          )}
        </View>
      )} */}
      <Button title="Log out from google" onPress={handleLogout} />

      <Button title="Login with LinkedIn" onPress={handleLinkedInLogin} />
      {/* <Login/> */}
    </SafeAreaView>
  );
}

export default App;
