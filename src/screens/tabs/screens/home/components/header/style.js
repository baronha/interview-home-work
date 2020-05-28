import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../../../utils/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowRadius: 24,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerInfo: {
    flex: 1,
  },
  time: {
    color: colors.grey,
    fontWeight: '600',
    paddingBottom: 4,
  },
  logo: {
    width: width / 3,
    height: 24,
    marginTop: 4,
  },
  avatarView: {
    backgroundColor: colors.white,
    shadowRadius: 24,
    height: 48,
    width: 48,
    borderRadius: 24,
    shadowOpacity: 0.05,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
  },
  headerLogoAnimated: {
    width: width,
    height: 32,
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    // tintColor: colors.white,
    // backgroundColor: 'red',
    // top: 0
  },
});
