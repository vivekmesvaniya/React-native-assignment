import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../constant/Theme';

export const step3Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 40,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Dimensions.get('screen').height * 0.1,
  },
  titleContainer: {
    gap: 6,
    width: '100%',
  },
  smallTitle: {
    color: theme.blackColor,
    fontSize: theme.normal,
    lineHeight: 21,
    textAlign: 'center',
    fontFamily: theme.PoppinsRegular,
  },
  bigTitleContainer: {
    width: '100%',
    flexWrap: 'wrap',
  },
  title1: {
    fontSize: theme.extraLarge,
    lineHeight: 42,
    textAlign: 'center',
    color: theme.blackColor,
    width: '100%',
    fontFamily: theme.PoppinsRegular,
  },
  title2: {
    color: theme.primaryColor,
    fontFamily: theme.PoppinsSemiBold,
  },
  segmentButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    flexWrap: 'wrap',
  },
  segmentButtonWidth: {
    width: '48%',
  },
});
