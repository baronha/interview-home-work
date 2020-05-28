import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

const Authot = ({data}) => {
  return (
    <View style={style.container}>
      <Image style={style.avatar} source={{uri: data.avatar}} />
      <View style={style.info}>
        <Text style={style.name}>{data.name}</Text>
        <Text style={style.userName}>{data.user_name}</Text>
      </View>
      <TouchableOpacity style={style.followButton}>
        <Text style={style.followText}>Theo dõi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authot;
