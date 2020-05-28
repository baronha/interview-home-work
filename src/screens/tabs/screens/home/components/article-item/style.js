import {StyleSheet} from 'react-native';
import colors from '../../../../../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  info: {
    paddingLeft: 24,
    flex: 1,
  },
  image: {
    height: 78,
    width: 78,
    backgroundColor: colors.grey,
  },
  cate: {
    color: colors.colorCate,
    fontWeight: '500',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 8,
  },
  time: {
    color: colors.grey,
  },
});
