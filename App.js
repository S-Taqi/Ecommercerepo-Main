import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/index';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
//import {mystore} from './src/store/store';
import { mystore } from '././src/store/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreLogs(['EventEmitter.removeListener']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <>
      <Provider store={mystore}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
