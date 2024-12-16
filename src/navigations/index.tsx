import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authentication';
import Profile from '../screens/profile';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
    </Stack.Navigator>
  );
};

export default Navigation;
