/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Animated,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import {Header} from '../components';
import colors from '../../../utils/colors';
import {validateUserName, login} from '../helpers';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Feather';
import NavigationService from '../../../navigators/NavigationService';

const {width} = Dimensions.get('window');

const SignUp = () => {
  const [step2, setStep2] = useState(false);
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSignUp = () => {
    if (name.trim() === '') {
      Alert.alert('Không được để trống tên');
      return false;
    }
    setLoading(true);
    const userInfo = {
      user_name: userName,
      password: pass,
      name: name,
      avatar: '',
    };
    firestore()
      .collection('users')
      .add(userInfo)
      .then(() => {
        login(userName, pass);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        Alert.alert('Đã có lỗi xảy ra');
      });
  };

  const onLogin = () => {
    NavigationService.navigate('LoginScreen');
  };

  const checkSignUp = () => {
    if (userName.trim() === '' || pass.trim() === '' || rePass.trim() === '') {
      Alert.alert('Bạn không được bỏ trống bất cứ thông tin nào');
      return false;
    }
    if (!validateUserName(userName)) {
      Alert.alert('Tên đăng nhập không hợp lệ');
      return false;
    }
    if (rePass !== pass) {
      Alert.alert('Mật khẩu xác nhận không đúng');
      return false;
    }
    firestore()
      .collection('users')
      .where('user_name', '==', userName)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          Alert.alert('Tên đăng nhập đã tồn tại');
        } else {
          setStep2(true);
        }
      });
  };

  const onPress = () => {
    if (!step2) {
      checkSignUp();
    } else {
      onSignUp();
    }
  };

  const onChangeUserName = value => {
    setUserName(value);
  };

  const onChangePass = value => {
    setPass(value);
  };

  const onChangeRePass = value => {
    setRePass(value);
  };

  const onChangeName = value => {
    setName(value);
  };

  const onChangeAvatar = () => {
    Alert.alert('Tính năng đang trong quá trình phát triển! Lêu Lêu 🤪');
  };

  return (
    <View style={style.container}>
      <Header />
      <Text style={style.titleMain}>Đăng ký</Text>
      <ScrollView style={style.content}>
        {!step2 ? (
          <View style={style.step1}>
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
            <TextInput
              value={rePass}
              onChangeText={onChangeRePass}
              style={style.textInput}
              autoCorrect={false}
              selectionColor={colors.black}
              placeholderTextColor={colors.grey}
              placeholder={'Xác nhận mật khẩu'}
              secureTextEntry={true}
            />
          </View>
        ) : (
          <Animated.View style={style.step2}>
            <TouchableOpacity
              onPress={onChangeAvatar}
              style={style.avatarButton}>
              <Icon name={'camera'} size={40} color={colors.white} />
            </TouchableOpacity>
            <TextInput
              value={name}
              onChangeText={onChangeName}
              style={style.textInput}
              autoCorrect={false}
              selectionColor={colors.black}
              placeholderTextColor={colors.grey}
              placeholder={'Họ và tên'}
            />
          </Animated.View>
        )}
      </ScrollView>
      <TouchableOpacity onPress={onPress} style={style.button}>
        <Text style={style.textButton}>Xác nhận</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogin} style={style.buttonLogin}>
        <Text style={{color: colors.black}}>
          Bạn đã có tài khoản ?{' '}
          <Text style={{fontWeight: 'bold'}}>Đăng nhập ngay</Text>
        </Text>
      </TouchableOpacity>
      {isLoading && (
        <View onTouchStart={() => setLoading(false)} style={style.loadingView}>
          <ActivityIndicator color={colors.white} />
        </View>
      )}
    </View>
  );
};

export default SignUp;
