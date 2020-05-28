import React from 'react';
import {
  NavigationActions,
  StackActions,
  CommonActions,
} from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export const navigationRef = React.createRef();

const navigate = async (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
};

function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

function reset() {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'SplashScreen'})],
  });
  _navigator.dispatch(resetAction);
}

function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}
// add other navigation functions that you need and export them

export default {
  goBack,
  push,
  reset,
  navigate,
  setTopLevelNavigator,
};
