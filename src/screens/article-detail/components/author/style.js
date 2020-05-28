import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: colors.grey,
    borderRadius: 24,
  },
  info: {
    paddingHorizontal: 24,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  userName: {
    color: colors.colorCate,
  },
  followButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.black,
  },
  followText: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
