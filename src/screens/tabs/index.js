import React, {useState, useRef, useEffect} from 'react';
import {Image, View, TouchableWithoutFeedback} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, CreatePost, SavedPost, User} from './screens';
import {useSafeArea} from 'react-native-safe-area-context';
import {getUserInfo} from '../../utils/helpers';
import style from './style';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const routeAuthScreen = ['Message', 'User'];

const TabBarComponent = ({state, descriptors, navigation}) => {
  const [index, setIndex] = useState(0);

  const insets = useSafeArea();

  const onSelect = async index => {
    const user = await getUserInfo();
    if (index === 2) {
      if (user !== null) {
        navigation.navigate('CreatePostScreen');
      } else {
        navigation.navigate('GenegalScreen');
      }
    } else {
      const selectedTabRoute = state.routes[index];
      const onHandleTab = () => {
        setIndex(index);
        navigation.navigate(selectedTabRoute.name);
      };
      if (routeAuthScreen.includes(selectedTabRoute.name)) {
        if (user !== null) {
          setIndex(index);
          onHandleTab();
        } else {
          navigation.navigate('GenegalScreen');
        }
      } else {
        onHandleTab();
      }
    }
  };
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpaci
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpaci>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.black,
        inactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="plus-square" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedPost"
        component={SavedPost}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
