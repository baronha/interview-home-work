import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {Button} from '../../../../components';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';

const User = ({navigation}) => {
  const onLogOut = () => {
    AsyncStorage.removeItem('theZigvyTimes.userInfo').then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'SplashScreen'}],
        }),
      );
    });
  };

  return (
    <View style={style.container}>
      <Button onPress={onLogOut} title={'Đăng xuất'} />
    </View>
  );
};

export default User;
