/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import UnderLineIcon from '../../../../icons/underline-svg';
import SegmentButtonComp from '../../../../components/segment-button';
import PrimaryButton from '../../../../components/primary-button';
import {useCheckOrientation} from '../../../../hooks/orientation-check';
import {gender} from '../../../../constant/data';
import {step4Style} from './style';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Step4 = ({getState, saveState}: {getState?: any; saveState?: any}) => {
  const [selectedGender, setSelectedGender] = useState({
    gender: '',
    selected: false,
  });
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const orientation = useCheckOrientation();

  const handleSubmitData = () => {
    let allData = getState();
    allData.gender = selectedGender.gender;
    saveState(allData);
    let newState = getState();
    navigation.navigate('Profile', {data: newState});
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: orientation === 'horizontal' ? 0 : 1}}>
      <View style={step4Style.container}>
        <View style={step4Style.main}>
          <View style={step4Style.titleContainer}>
            <Text style={step4Style.chooseTitle}>
              Choose the <Text style={step4Style.identityTitle}>identity </Text>
              that feels right for
            </Text>
            <View style={step4Style.youTitleContainer}>
              <Text style={step4Style.youTitle}> You?</Text>
              <UnderLineIcon />
            </View>
          </View>
          <View style={step4Style.segmentData}>
            {gender.map(item => (
              <SegmentButtonComp
                key={item.id}
                selected={selectedGender?.gender === item?.title}
                title={item.title}
                onPress={() =>
                  setSelectedGender(() => ({
                    gender: item?.title,
                    selected: true,
                  }))
                }
              />
            ))}
          </View>
        </View>
        <PrimaryButton title="Continue" onPress={handleSubmitData} />
      </View>
    </ScrollView>
  );
};

export default Step4;
