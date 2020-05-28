import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../../../../utils/colors';
import localization from 'moment/locale/vi';
import NavigationService from '../../../../../../navigators/NavigationService';

const AiticleMain = ({item}) => {
  const goDetail = () => {
    NavigationService.navigate('ArticleDetailScreen', {data: item});
  };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={goDetail}>
        <Image source={{uri: item.image}} style={style.image} />
      </TouchableOpacity>
      <View style={style.row}>
        <Text style={style.cate}>{item?.category?.name}</Text>
        <Text style={style.time}>{moment(item.time).fromNow()}</Text>
      </View>
      <TouchableOpacity onPress={goDetail}>
        <Text numberOfLines={2} style={style.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonSave}>
        <Icon name={'bookmark'} size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default AiticleMain;
