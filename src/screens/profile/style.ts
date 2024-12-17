import {StyleSheet} from 'react-native';
import {theme} from '../../constant/Theme';

export const profileStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 24,
    fontFamily: theme.PopinssBlack,
    // fontWeight: 'bold',
    color: theme.blackColor,
    marginBottom: 5,
  },
  username: {
    fontSize: theme.medium,
    // fontWeight: '300',
    fontFamily: theme.PoppinsLight,
    color: theme.grayScaleColor,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: theme.normal,
    fontFamily: theme.PoppinsMedium,
    color: '#888',
    marginBottom: 5,
  },
  text: {
    fontSize: theme.medium,
    color: theme.blackColor,
    fontFamily: theme.PoppinsRegular,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  socialButton: {
    backgroundColor: '#e4405f',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
