import AsyncStorage from '@react-native-community/async-storage';

export const getUserInfo = async () => {
  const response = AsyncStorage.getItem('theZigvyTimes.userInfo');
  let data = await response;
  return data;
};
