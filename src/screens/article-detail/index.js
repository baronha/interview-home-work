import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import style from './style';
import {Header, Author} from './components';
import moment from 'moment';

const ArticleDetail = ({route}) => {
  const data = route.params?.data;
  console.log(data);
  return (
    <View style={style.container}>
      <ScrollView style={style.scrollView} scrollEventThrottle={16}>
        <Image
          style={style.image}
          source={{uri: data.image}}
          resizeMode={'cover'}
        />
        <View style={style.row}>
          <Text style={style.cateText}>{data.category?.name}</Text>
          <Text style={style.time}>{moment(data.time).fromNow()}</Text>
        </View>
        <Text style={style.title}>{data.title}</Text>
        <Author data={data.author} />
        <View style={style.line} />
        <Text style={style.body}>
          {'  '}
          {data.content}
        </Text>
      </ScrollView>
      <Header />
    </View>
  );
};

export default ArticleDetail;
