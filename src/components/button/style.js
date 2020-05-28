import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    margin: 24,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.white,
  },
});
