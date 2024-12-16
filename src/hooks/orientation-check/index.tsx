import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useCheckOrientation = () => {
  const [isHorizontal, setIsHorizontal] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height,
  );

  const updateOrientation = () => {
    const {width, height} = Dimensions.get('window');
    setIsHorizontal(width > height);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );

    return () => {
      subscription?.remove();
    };
  }, []);
  return isHorizontal === true ? 'horizontal' : 'vertical';
};
