import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {step1Style} from './style';
import GoogleIcon from '../../../../icons/google-icon';
import FaceBookIcon from '../../../../icons/facebook-icon';

const Step1 = ({back, next}: {back: () => void; next: () => void}) => {
  return (
    <View style={step1Style.container}>
      <View style={step1Style.mainTitleContainer}>
        <Text style={step1Style.title1Text}>
          Begin Your <Text style={step1Style.title2Text}>Mindful Journey</Text>
        </Text>
        <Text style={step1Style.descText}>
          Log In Or Sign Up To Begin Your Journey With Personalized, Human-Like
          Wellness Support
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
          <Pressable style={step1Style.facebookButton}>
            <FaceBookIcon height={24} width={24} fill={'#ffffff'} />
            <Text style={step1Style.facebookButtonText}>
              Continue With FaceBook
            </Text>
          </Pressable>
          <Pressable style={step1Style.googleButtonContainer}>
            <GoogleIcon />
            <Text style={step1Style.googleButtonText}>
              Continue With Google
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Step1;
