import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import style from './style';
import {Header} from '../components';
import {login} from '../helpers';
import colors from '../../../utils/colors';
import {Button} from '../../../components';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  const onChangeUserName = value => {
    setUserName(value);
  };

  const onChangePass = value => {
    setPass(value);
  };

  const onLogin = () => {
    if (userName.trim() === '' || pass.trim() === '') {
      Alert.alert('Không được bỏ trống thông tin đăng nhập');
      return false;
    }
    login(userName, pass);
    Keyboard.dismiss();
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={style.container}>
        <Header />
        <Text style={style.titleMain}>Đăng nhập</Text>
        <View style={style.content}>
          <TextInput
            value={userName}
            onChangeText={onChangeUserName}
            style={style.textInput}
            autoCorrect={false}
            selectionColor={colors.black}
            placeholderTextColor={colors.grey}
            placeholder={'Tên đăng nhập'}
          />
          <TextInput
            value={pass}
            onChangeText={onChangePass}
            style={style.textInput}
            autoCorrect={false}
            selectionColor={colors.black}
            placeholderTextColor={colors.grey}
            placeholder={'Mật khẩu'}
            secureTextEntry={true}
          />
          <TouchableOpacity style={style.buttonForgot}>
            <Text style={style.textForgot}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          keyboardVerticalOffset={48}
          behavior={Platform.OS === 'ios' && 'padding'}>
          <Button onPress={onLogin} title={'Đăng nhập'} />
        </KeyboardAvoidingView>
        <SafeAreaView />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
