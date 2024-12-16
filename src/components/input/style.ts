import {StyleSheet} from 'react-native';
import {theme} from '../../constant/Theme';

export const inputStyle = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.borderColor,
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  input: {
    paddingHorizontal: 25,
    color: theme.blackColor,
    lineHeight: 24,
    fontSize: theme.medium,
    height: 60,
    fontFamily: theme.PoppinsMedium,
  },
});
