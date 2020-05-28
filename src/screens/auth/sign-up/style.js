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
  content: {
    flex: 1,
    paddingVertical: 24,
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
  textButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: colors.black,
    margin: 24,
  },
  buttonLogin: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarButton: {
    alignSelf: 'center',
    backgroundColor: colors.black,
    width: 124,
    height: 124,
    borderRadius: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 64,
  },
  loadingView: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.black + '00092',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
