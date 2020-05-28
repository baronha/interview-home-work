import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

const Button = ({onPress, title, containerStyle, titleStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.container, containerStyle]}>
      <Text style={[style.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
