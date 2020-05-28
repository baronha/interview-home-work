/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import style from './style';
import {getUserInfo} from '../../utils/helpers';
import {CommonActions} from '@react-navigation/native';
console.disableYellowBox = true;
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkUserInfo();
    }, 1500);
    return () => clearTimeout();
  }, []);

  const checkUserInfo = async () => {
    const user = await getUserInfo();
    if (user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Main'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'GeneralScreen'}],
        }),
      );
    }
  };

  return (
    <View style={style.container}>
      <StatusBar barStyle={'light-content'} />
      <Image
        style={style.image}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
