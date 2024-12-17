import {View, Dimensions, Alert, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
//@ts-ignore
import AnimatedMultistep from 'react-native-animated-multistep';
import Step1 from './steps/step-1';
import * as Progress from 'react-native-progress';
import {loginStyle} from './styles';
import Step2 from './steps/step-2';
import Step3 from './steps/step-3';
import Step4 from './steps/step-4';

const Login = () => {
  const [progress, setProgress] = useState(0.25);
  const [dynamicHeightWidth, setDynamicHeightWidth] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  const updateOrientation = () => {
    const {width, height} = Dimensions.get('window');
    setDynamicHeightWidth({width, height});
  };
  const steps = [
    {
      name: 'step-1',
      component: Step1,
    },
    {
      name: 'step-2',
      component: Step2,
    },
    {
      name: 'step-3',
      component: Step3,
    },
    {
      name: 'step-4',
      component: Step4,
    },
  ];

  const handleNext = () => {
    const newProgress = Math.min(progress + 0.25);
    setProgress(newProgress);
  };

  const handlePrev = () => {
    const newProgress = Math.min(progress - 0.25);
    setProgress(newProgress);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );

    const backAction = () => {
      Alert.alert('Alert!', 'Are you sure you want to exit the app?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      subscription?.remove();
      backHandler.remove();
    };
  }, []);
  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.progressContainer}>
        <Progress.Bar
          progress={progress}
          color="#F7B174"
          width={dynamicHeightWidth?.width / 1.2}
          style={loginStyle.progress}
        />
      </View>
      <View style={loginStyle.stepContainer}>
        <AnimatedMultistep
          steps={steps}
          onNext={() => handleNext()}
          onBack={() => handlePrev()}
        />
      </View>
    </View>
  );
};

export default Login;
