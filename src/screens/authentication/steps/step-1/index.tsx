/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, ScrollView, Alert} from 'react-native';
import React from 'react';
import {step1Style} from './style';
import GoogleIcon from '../../../../icons/google-icon';
import FaceBookIcon from '../../../../icons/facebook-icon';
import {useCheckOrientation} from '../../../../hooks/orientation-check';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const Step1 = ({
  next,
  saveState,
}: {
  back?: () => void;
  next: () => void;
  saveState?: any;
}) => {
  const orientation = useCheckOrientation();
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const googleInfoData = await GoogleSignin.signIn();
      saveState({googleData: googleInfoData});
      next();
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

  const facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        Alert.alert('Alert', 'User cancelled the login process');
        return;
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (data) {
        fetch(
          `https://graph.facebook.com/me?access_token=${data.accessToken.toString()}&fields=id,name,email,picture`,
        )
          .then(response => response.json())
          .then(json => {
            console.log('User data from Facebook:', json);
            saveState(json);
            next();
          })
          .catch(error => {
            Alert.alert('Alert', 'Some Problem Occurs to get User data');
            console.log('Error fetching user data:', error);
          });
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.error('Facebook Login Error:', error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: orientation === 'horizontal' ? 0 : 1}}>
      <View style={step1Style.container}>
        <View style={step1Style.mainTitleContainer}>
          <Text style={step1Style.title1Text}>
            Begin Your{' '}
            <Text style={step1Style.title2Text}>Mindful Journey</Text>
          </Text>
          <Text style={step1Style.descText}>
            Log In Or Sign Up To Begin Your Journey With Personalized,
            Human-Like Wellness Support
          </Text>
        </View>
        <View style={step1Style.bottomSheetContainer}>
          <View style={step1Style.chipContainer}>
            <View style={step1Style.chip}>
              <View style={step1Style.focusClip} />
              <View style={step1Style.clip} />
              <View style={step1Style.clip} />
              <View style={step1Style.clip} />
            </View>
          </View>
          <View style={step1Style.buttonContainer}>
            <Pressable
              style={step1Style.facebookButton}
              onPress={() => facebookLogin()}>
              <FaceBookIcon height={24} width={24} fill={'#ffffff'} />
              <Text style={step1Style.facebookButtonText}>
                Continue With FaceBook
              </Text>
            </Pressable>
            <Pressable
              style={step1Style.googleButtonContainer}
              onPress={() => googleLogin()}>
              <GoogleIcon />
              <Text style={step1Style.googleButtonText}>
                Continue With Google
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1;
