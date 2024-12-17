import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authentication';
import Profile from '../screens/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/splash-screen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [isLogin, setIsLogin] = useState<null | boolean>(null);

  const checkIsLogin = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData !== null && Object.keys(userData).length > 0) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    checkIsLogin();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{animation: 'ios_from_left'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{animation: 'ios_from_left'}}
          />
        </>
      ) : isLogin === null ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{animation: 'ios_from_left'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{animation: 'ios_from_left'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
