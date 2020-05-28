import React from 'react';
import {View, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../../utils/colors';
import NavigationService from '../../../../navigators/NavigationService';

const Header = ({scrollY}) => {
  const goBack = () => {
    NavigationService.goBack();
  };
  return (
    <View style={style.container}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <SafeAreaView />
      <View style={style.header}>
        <TouchableOpacity onPress={goBack} style={style.backButton}>
          <Icon color={colors.white} size={24} name={'chevron-left'} />
        </TouchableOpacity>
        <TouchableOpacity style={style.backButton}>
          <Icon color={colors.white} size={24} name={'bookmark'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
