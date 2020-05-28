import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from '../navigators/AppNavigation';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={'dark-content'} />
      <AppNavigator />
    </React.Fragment>
  );
};

export default App;
