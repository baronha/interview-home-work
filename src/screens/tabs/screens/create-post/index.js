import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {getUserInfo} from '../../../../utils/helpers';
import colors from '../../../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const result = await getUserInfo();
    if (result) {
      const user = JSON.parse(result);
      setUserInfo(user);
    }
  };

  const onChangeTitle = value => {
    setTitle(value);
  };

  const onChangeContent = value => {
    setContent(value);
  };

  const selectImage = () => {
    // ImagePicker.openPicker().then(image => {
    //   console.log(image);
    // });
  };

  return (
    <View style={style.container}>
      <SafeAreaView />
      <View style={style.header}>
        <Text style={style.titleMain}>Thêm bài viết mới</Text>
      </View>
      <ScrollView contentContainerStyle={style.content}>
        <TouchableOpacity style={style.buttonSelectImage} onPress={selectImage}>
          <Text style={style.text}>Ảnh bìa bài viết</Text>
        </TouchableOpacity>
        <TextInput
          value={title}
          onChangeText={onChangeTitle}
          style={style.textInput}
          autoCorrect={false}
          selectionColor={colors.black}
          placeholderTextColor={colors.grey}
          placeholder={'Tiêu đề'}
        />
      </ScrollView>
    </View>
  );
};

export default CreatePost;
