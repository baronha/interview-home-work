import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const ArticleItem = ({item}) => {
  return (
    <View style={style.container}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default ArticleItem;
