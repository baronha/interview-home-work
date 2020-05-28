import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import NavigationService from '../../../navigators/NavigationService';

const General = () => {
  const goLogin = () => {
    NavigationService.navigate('LoginScreen');
  };

  const goSignUp = () => {
    NavigationService.navigate('SignUpScreen');
  };

  return (
    <View style={style.container}>
      <View style={style.content}>
        <Image
          source={require('../../../assets/images/logo_text.png')}
          style={style.logo}
          resizeMode={'contain'}
        />
        <View style={style.buttonGroup}>
          <TouchableOpacity
            onPress={goLogin}
            style={[style.button, style.buttonLogin]}>
            <Text style={[style.textButton, style.textLogin]}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goSignUp}
            style={[style.button, style.buttonSignUp]}>
            <Text style={[style.textButton, style.textSignUp]}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={style.forgotPassword}>
        <Text style={style.textForgot}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={style.logoAbsolute}
      />
    </View>
  );
};

export default General;
