import React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

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

function reset(routeName) {
  const resetAction = StackActions.reset({
    index: 1,
    actions: [navigationRef.current?.navigate({routeName})],
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
