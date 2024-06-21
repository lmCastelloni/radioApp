import React from 'react';
import NavigatorStack from './navigation/NavigatorStack';
import {NavigationContainer} from '@react-navigation/native';

function RadioApp() {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
}

export default RadioApp;
