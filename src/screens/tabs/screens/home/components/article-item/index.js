import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import moment from 'moment';
import NavigationService from '../../../../../../navigators/NavigationService';

const ArticleItem = ({item}) => {
  const goDetail = () => {
    NavigationService.navigate('ArticleDetailScreen', {data: item});
  };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={goDetail}>
        <Image style={style.image} source={{uri: item?.image}} />
      </TouchableOpacity>
      <View style={style.info}>
        <Text style={style.cate}>{item?.category?.name}</Text>
        <TouchableOpacity onPress={goDetail}>
          <Text numberOfLines={1} style={style.title}>
            {item?.title}
          </Text>
        </TouchableOpacity>
        <Text style={style.time}>{moment(item?.time).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ArticleItem;
