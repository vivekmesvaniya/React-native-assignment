import {StyleSheet} from 'react-native';
import {theme} from '../../constant/Theme';

export const segmentButtonStyle = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    width: '100%',
  },
  buttonText: {
    fontSize: theme.medium,
    lineHeight: 24,
    fontFamily: theme.PoppinsMedium,
  },
});
