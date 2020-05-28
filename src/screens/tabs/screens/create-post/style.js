import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 24,
  },
  titleMain: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    paddingTop: 24,
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
});
