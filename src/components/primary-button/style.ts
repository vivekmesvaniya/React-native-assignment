import {StyleSheet} from 'react-native';
import {theme} from '../../constant/Theme';

export const primaryButtonStyle = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 50,
    backgroundColor: theme.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 208, 167, 1)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: theme.medium,
    lineHeight: 24,
    color: theme.secondaryColor,
    fontFamily: theme.PoppinsMedium,
  },
});
