import {View, Dimensions} from 'react-native';
import React, {useState} from 'react';
//@ts-ignore
import AnimatedMultistep from 'react-native-animated-multistep';
import Step1 from './steps/step-1';
import * as Progress from 'react-native-progress';
import {loginStyle} from './styles';

const Login = () => {
  const [progress, setProgress] = useState(0.25);
  const steps = [
    {
      name: 'step-1',
      component: Step1,
    },
  ];

  const handleNext = () => {
    const newProgress = Math.min(progress + 0.17);
    setProgress(newProgress);
  };

  const handlePrev = () => {
    const newProgress = Math.min(progress - 0.17);
    setProgress(newProgress);
  };
  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.progressContainer}>
        <Progress.Bar
          progress={progress}
          color="#F7B174"
          width={Dimensions.get('window').width / 1.2}
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
