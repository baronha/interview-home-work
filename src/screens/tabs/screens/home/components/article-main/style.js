import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../../../utils/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  image: {
    height: (width * 5) / 12,
    backgroundColor: colors.grey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 6,
  },
  cate: {
    color: colors.colorCate,
    fontWeight: '600',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonSave: {
    position: 'absolute',
    top: 12,
    right: 32,
    // left: 0
  },
});
