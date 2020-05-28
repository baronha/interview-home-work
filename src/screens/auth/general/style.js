import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../utils/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  content: {
    justifyContent: 'space-around',
    flex: 1,
  },
  logo: {
    width: width - 48,
  },
  button: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 'bold',
  },
  buttonLogin: {
    backgroundColor: colors.black,
  },
  buttonSignUp: {
    marginTop: 32,
    borderWidth: 2,
  },
  textLogin: {
    color: colors.white,
  },
  textSignUp: {},
  logoAbsolute: {
    position: 'absolute',
    height: width / 1.5,
    width: width / 1.5,
    top: -56,
    right: -100,
    tintColor: colors.grey + '64',
  },
  forgotPassword: {
    bottom: 24,
  },
  textForgot: {
    color: colors.grey,
  },
});
