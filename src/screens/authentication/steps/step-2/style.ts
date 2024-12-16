import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../constant/Theme';

export const step2Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  titleInputContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    gap: Dimensions.get('screen').height * 0.2,
  },
  smallTitleText: {
    color: theme.blackColor,
    fontSize: theme.normal,
    lineHeight: 21,
    textAlign: 'center',
    fontFamily: theme.PoppinsMedium,
  },
  bigTitleTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: '100%',
  },
  whatTitle: {
    fontSize: theme.extraLarge,
    lineHeight: 42,
    textAlign: 'center',
    color: theme.primaryColor,
    fontFamily: theme.PoppinsBold,
  },
  shouldTitle: {
    fontSize: theme.extraLarge,
    lineHeight: 42,
    textAlign: 'center',
    color: theme.blackColor,
    fontFamily: theme.PoppinsRegular,
  },
  youText: {
    fontSize: theme.extraLarge,
    lineHeight: 42,
    textAlign: 'center',
    color: theme.blackColor,
    fontFamily: theme.PoppinsBold,
  },
  inputContainer: {
    width: '100%',
  },
});
