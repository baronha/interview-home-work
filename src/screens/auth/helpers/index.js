/* eslint-disable no-alert */
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import NavigationService from '../../../navigators/NavigationService';
export const validateUserName = userName => {
  return /^[a-zA-Z0-9_.]+$/.test(userName);
};

export const login = (userName, password) => {
  firestore()
    .collection('users')
    .where('user_name', '==', userName)
    .where('password', '==', password)
    .get()
    .then(async querySnapshot => {
      if (!querySnapshot.empty) {
        const dataLogin = querySnapshot.docs[0].data();
        try {
          await AsyncStorage.setItem(
            'theZigvyTimes.userInfo',
            JSON.stringify(dataLogin),
          ).then(() => {
            NavigationService.navigate('Main');
            alert('Đăng nhập thành công');
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác');
      }
    });
};
