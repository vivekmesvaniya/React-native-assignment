/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import UnderLineIcon from '../../../../icons/underline-svg';
import InputComp from '../../../../components/input';
import PrimaryButton from '../../../../components/primary-button';
import {step2Style} from './style';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessageComp from '../../../../components/error-message';
import {useCheckOrientation} from '../../../../hooks/orientation-check';

const Step2 = ({
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
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<{name: string}>({
    defaultValues: {
      name: '',
    },
  });
  const handleSubmitData = (value: {name: string}) => {
    let data = getState();
    data.name = value.name;
    saveState(data);
    next();
  };
  return (
    <ScrollView
      contentContainerStyle={{flex: orientation === 'horizontal' ? 0 : 1}}>
      <View style={step2Style.container}>
        <View style={step2Style.titleInputContainer}>
          <View>
            <Text style={step2Style.smallTitleText}>
              Let’s get to know each other
            </Text>
            <View style={step2Style.bigTitleTextContainer}>
              <Text style={step2Style.whatTitle}>What </Text>
              <Text style={step2Style.shouldTitle}>should we call</Text>
              <View>
                <Text style={step2Style.youText}>You?</Text>
                <Text>
                  <UnderLineIcon />
                </Text>
              </View>
            </View>
          </View>
          <View style={step2Style.inputContainer}>
            <Controller
              name="name"
              control={control}
              rules={{required: 'Please Enter Your Name*'}}
              render={({field: {onChange, value}}) => (
                <View>
                  <InputComp
                    placeholder="Name"
                    placeholderTextColor="rgba(97, 97, 97, 1)"
                    defaultValue={value}
                    onChangeText={onChange}
                  />
                  {errors?.name && errors.name.message && (
                    <ErrorMessageComp message={errors.name.message} />
                  )}
                </View>
              )}
            />
          </View>
        </View>
        <PrimaryButton
          title="Continue"
          onPress={handleSubmit(handleSubmitData)}
        />
      </View>
    </ScrollView>
  );
};

export default Step2;
