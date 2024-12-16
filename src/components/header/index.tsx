import {View, Text, Pressable} from 'react-native';
import React from 'react';
import LogOutIcon from '../../icons/logout-icon';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(247, 177, 116, 1)',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          width: '80%',
          textAlign: 'center',
        }}>
        Profile
      </Text>
      <Pressable>
        <LogOutIcon fill={'white'} height={20} width={20} />
      </Pressable>
    </View>
  );
};

export default Header;
