import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../constant/Theme';

export const step4Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  main: {
    gap: Dimensions.get('screen').height * 0.1,
    flex: 1,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  chooseTitle: {
    fontSize: theme.extraLarge,
    lineHeight: 42,
    textAlign: 'center',
    color: theme.blackColor,
    fontFamily: theme.PoppinsRegular,
  },
  identityTitle: {
    color: theme.primaryColor,
    fontFamily: theme.PoppinsBold,
  },
  youTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  youTitle: {
    fontSize: theme.extraLarge,
    color: theme.blackColor,
    paddingTop: 10,
    fontFamily: theme.PoppinsBold,
  },
  segmentData: {
    width: '100%',
    gap: 8,
  },
});
