import React from 'react';
import {View, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/Feather';
import NavigationService from '../../../../navigators/NavigationService';

const Header = () => {
  const goBack = () => {
    NavigationService.goBack();
  };
  return (
    <View style={style.container}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView />
      <View style={style.header}>
        <TouchableOpacity style={style.buttonClose} onPress={goBack}>
          <Icon name={'x'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
