import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  header: {
    alignItems: 'flex-end',
  },
  buttonClose: {
    borderRadius: 20,
    backgroundColor: colors.grey + 32,
    width: 32,
    height: 32,
    right: 24,
    top: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
