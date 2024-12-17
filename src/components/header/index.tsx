import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import LogOutIcon from '../../icons/logout-icon';
import {theme} from '../../constant/Theme';

const Header = ({logoutFunc}: {logoutFunc?: () => void}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Profile</Text>
      <Pressable onPress={logoutFunc} style={styles.logoutButton}>
        <LogOutIcon fill={'white'} height={24} width={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgba(247, 177, 116, 1)',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    // fontWeight: 'bold',
    fontFamily: theme.PoppinsBold,
    width: '80%',
    // textAlign: 'center',
  },
  logoutButton: {
    padding: 5,
  },
});

export default Header;
