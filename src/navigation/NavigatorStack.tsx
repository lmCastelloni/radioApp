import React from 'react';
import Favorites from './screens/Favorites';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Additional from './screens/Additional';
import BottomTabsStack from './screens/BottomTabsStack';

const NavigatorStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabsStack"
        component={BottomTabsStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Additional" component={Additional} />
    </Stack.Navigator>
  );
};

export default NavigatorStack;
