import React from 'react';
import {View, Text, Animated, SafeAreaView, Image} from 'react-native';
import style from './style';
import colors from '../../../../../../utils/colors';
import moment from 'moment';

const Header = ({scrollY}) => {
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
  });

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [colors.white, colors.black],
  });

  const headerLogoOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });

  const shadowOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 0.2],
  });

  return (
    <Animated.View
      style={[
        style.container,
        {
          shadowOpacity,
          // backgroundColor,
        },
      ]}>
      <SafeAreaView />
      <Animated.View
        style={[
          style.header,
          {
            opacity: headerOpacity,
          },
        ]}>
        <View style={style.headerInfo}>
          <Text style={style.time}>{moment().format('L')}</Text>
          <Image
            style={style.logo}
            resizeMode={'contain'}
            source={require('../../../../../../assets/images/logo_text.png')}
          />
        </View>
        <View style={style.avatarView}>
          <Image
            style={style.avatar}
            source={require('../../../../../../assets/images/logo.png')}
          />
        </View>
      </Animated.View>
      <Animated.Image
        style={[
          style.headerLogoAnimated,
          {
            opacity: headerLogoOpacity,
          },
        ]}
        resizeMode={'contain'}
        source={require('../../../../../../assets/images/logo_text.png')}
      />
      <Text />
    </Animated.View>
  );
};

export default Header;
