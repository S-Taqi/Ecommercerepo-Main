import React from 'react';
import AppStack from './appStack';
import AuthStack from './authStack';

const AppNavigator = () => {
  return true ? <AppStack /> : <AuthStack />;
};
export default AppNavigator;
