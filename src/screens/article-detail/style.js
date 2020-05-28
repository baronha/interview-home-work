import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../utils/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  image: {
    width: width,
    height: width,
    marginBottom: 12,
    backgroundColor: colors.grey,
    marginHorizontal: -24,
  },
  cateText: {
    fontWeight: 'bold',
    color: colors.colorCate,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.grey,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingVertical: 12,
  },
  line: {
    width: 56,
    height: 4,
    backgroundColor: colors.grey + '92',
    marginVertical: 32,
    borderRadius: 24,
  },
  body: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
  },
});
