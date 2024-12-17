/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Image, ScrollView, Alert, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginManager} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {profileStyle} from './style';

const Profile = () => {
  const route = useRoute<any>();
  const {data} = route.params || {};
  const [userInfo, setUserInfo] = useState(data || {});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  console.log('userInfo', userInfo);

  const setDataInfo = async () => {
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  };
  const getUserData = async () => {
    let user = await AsyncStorage.getItem('userData');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  };

  const logout = async () => {
    Alert.alert('Alert!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          if (userInfo?.facebookData) {
            LoginManager.logOut();
            await AsyncStorage.clear();
            navigation.navigate('Login');
          } else if (userInfo?.googleData) {
            await GoogleSignin.signOut();
            navigation.navigate('Login');
            await AsyncStorage.clear();
          }
        },
      },
    ]);
  };
  useEffect(() => {
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

    if (Object.keys(userInfo)?.length > 0) {
      setDataInfo();
    }
    getUserData();

    return () => backHandler.remove();
  }, []);

  return (
    <View style={profileStyle.mainContainer}>
      <Header logoutFunc={logout} />
      <ScrollView>
        <View style={profileStyle.container}>
          {Object.keys(userInfo).length > 0 && userInfo?.facebookData ? (
            <View style={profileStyle.card}>
              {userInfo?.facebookData?.picture?.data?.url ? (
                <Image
                  source={{uri: userInfo?.facebookData?.picture?.data?.url}}
                  style={profileStyle.profileImage}
                  resizeMode="cover"
                />
              ) : (
                <View
                  style={[
                    profileStyle.profileImage,
                    {backgroundColor: 'lightgray'},
                  ]}
                />
              )}
              <View style={profileStyle.infoContainer}>
                <Text style={profileStyle.name}>{userInfo?.name}</Text>
                <Text style={profileStyle.username}>
                  @{userInfo?.facebookData?.id}
                </Text>

                <View style={profileStyle.detailsContainer}>
                  <Text style={profileStyle.label}>Email</Text>
                  <Text style={profileStyle.text}>
                    {userInfo?.facebookData?.email}
                  </Text>

                  <Text style={profileStyle.label}>Gender</Text>
                  <Text style={profileStyle.text}>{userInfo?.gender}</Text>

                  {userInfo?.location && (
                    <>
                      <Text style={profileStyle.label}>Location</Text>
                      <Text style={profileStyle.text}>
                        {userInfo?.facebookData?.location?.name}
                      </Text>
                    </>
                  )}

                  {userInfo?.bio && (
                    <>
                      <Text style={profileStyle.label}>Bio</Text>
                      <Text style={profileStyle.text}>{userInfo?.bio}</Text>
                    </>
                  )}

                  {userInfo?.phone && (
                    <>
                      <Text style={profileStyle.label}>Phone Number</Text>
                      <Text style={profileStyle.text}>{userInfo?.phone}</Text>
                    </>
                  )}

                  {userInfo?.followers_count && (
                    <>
                      <Text style={profileStyle.label}>Followers</Text>
                      <Text style={profileStyle.text}>
                        {userInfo?.followers_count}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          ) : (
            <View style={profileStyle.card}>
              {userInfo?.googleData?.data?.user?.photo ? (
                <Image
                  source={{uri: userInfo?.googleData?.data?.user?.photo}}
                  style={profileStyle.profileImage}
                  resizeMode="cover"
                />
              ) : (
                <View
                  style={[
                    profileStyle.profileImage,
                    {backgroundColor: 'lightgray'},
                  ]}
                />
              )}
              <View style={profileStyle.infoContainer}>
                <Text style={profileStyle.name}>{userInfo?.name}</Text>
                <Text style={profileStyle.username}>
                  @{userInfo?.googleData?.data?.user?.id}
                </Text>

                <View style={profileStyle.detailsContainer}>
                  <Text style={profileStyle.label}>Email</Text>
                  <Text style={profileStyle.text}>
                    {userInfo?.googleData?.data?.user?.email}
                  </Text>

                  <Text style={profileStyle.label}>Gender</Text>
                  <Text style={profileStyle.text}>{userInfo?.gender}</Text>

                  <Text style={profileStyle.label}>Age Between</Text>
                  <Text style={profileStyle.text}>{userInfo?.age}</Text>

                  {userInfo?.location && (
                    <>
                      <Text style={profileStyle.label}>Location</Text>
                      <Text style={profileStyle.text}>
                        {userInfo?.googleData?.location?.name}
                      </Text>
                    </>
                  )}

                  {userInfo?.bio && (
                    <>
                      <Text style={profileStyle.label}>Bio</Text>
                      <Text style={profileStyle.text}>{userInfo?.bio}</Text>
                    </>
                  )}

                  {userInfo?.phone && (
                    <>
                      <Text style={profileStyle.label}>Phone Number</Text>
                      <Text style={profileStyle.text}>{userInfo?.phone}</Text>
                    </>
                  )}

                  {userInfo?.followers_count && (
                    <>
                      <Text style={profileStyle.label}>Followers</Text>
                      <Text style={profileStyle.text}>
                        {userInfo?.followers_count}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
