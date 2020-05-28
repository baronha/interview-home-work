import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleMain: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 24,
  },
  textInput: {
    color: colors.black,
    marginHorizontal: 24,
    borderWidth: 1,
    padding: 12,
    borderColor: colors.grey,
    fontWeight: '600',
    marginBottom: 32,
  },
  content: {
    flex: 1,
    paddingTop: 64,
  },
  buttonForgot: {
    alignSelf: 'flex-end',
    right: 24,
    top: -24,
  },
  textForgot: {
    color: colors.black + '00092',
  },
});
