import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import MainTabNavigator from '../screens/tabs';
import SplashScreen from '../screens/splash';
import ArticleDetailScreen from '../screens/article-detail';
import GeneralScreen from '../screens/auth/general';
import LoginScreen from '../screens/auth/login';
import SignUpScreen from '../screens/auth/sign-up';
import CreatePostScreen from '../screens/tabs/screens/create-post';

const Stack = createStackNavigator();

const Root = createStackNavigator();

const SwitchNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SplashScreen'}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
        name="Main"
        component={MainTabNavigator}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
        name="GeneralScreen"
        component={GeneralScreen}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Root.Navigator
        screenOptions={({route, navigation}) => ({
          gestureEnabled: true,
          cardOverlayEnabled: true,
          headerStatusBarHeight:
            navigation.dangerouslyGetState().routes.indexOf(route) > 0
              ? 0
              : undefined,
          ...TransitionPresets.ModalPresentationIOS,
        })}
        mode={'modal'}
        headerMode={'none'}
        initialRouteName="Main">
        <Root.Screen name="Main" component={SwitchNavigation} />
        <Root.Screen name="CreatePostScreen" component={CreatePostScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
