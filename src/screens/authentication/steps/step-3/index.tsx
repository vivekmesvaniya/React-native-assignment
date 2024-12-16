/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SegmentButtonComp from '../../../../components/segment-button';
import PrimaryButton from '../../../../components/primary-button';
import {step3Style} from './style';
import {ageData} from '../../../../constant/data';
import {useCheckOrientation} from '../../../../hooks/orientation-check';

const Step3 = ({
  next,
  saveState,
  getState,
}: {
  back?: () => void;
  next: () => void;
  saveState?: any;
  getState?: any;
}) => {
  const orientation = useCheckOrientation();
  const [selectedAge, setSelectedAge] = useState({
    age: '',
    selected: false,
  });

  const handleSubmitData = () => {
    let data = getState();
    data.age = selectedAge?.age;
    saveState(data);
    next();
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: orientation === 'horizontal' ? 0 : 1}}>
      <View style={step3Style.container}>
        <View style={step3Style.main}>
          <View style={step3Style.titleContainer}>
            <Text style={step3Style.smallTitle}>
              Great, Let’s make Mynd all about you!
            </Text>
            <View style={step3Style.bigTitleContainer}>
              <Text style={step3Style.title1}>
                How Long Have You Been Rocking This{' '}
                <Text style={step3Style.title2}>World?</Text>
                <Text>🎂</Text>
              </Text>
            </View>
          </View>
          <View style={step3Style.segmentButtonContainer}>
            {ageData?.map(item => (
              <SegmentButtonComp
                buttonStyle={step3Style.segmentButtonWidth}
                key={item?.id}
                title={item?.title}
                onPress={() =>
                  setSelectedAge(() => ({
                    age: item?.title,
                    selected: true,
                  }))
                }
                selected={selectedAge?.age === item?.title}
              />
            ))}
          </View>
        </View>
        <PrimaryButton title="Continue" onPress={handleSubmitData} />
      </View>
    </ScrollView>
  );
};

export default Step3;
