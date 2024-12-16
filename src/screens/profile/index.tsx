import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {useRoute} from '@react-navigation/native';

const Profile = () => {
  const route = useRoute<any>();
  const {data} = route.params || {};
  console.log('Data', data);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <View>{/* <Image  /> */}</View>
    </View>
  );
};

export default Profile;
