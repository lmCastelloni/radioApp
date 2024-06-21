import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Favorites from './Favorites';
import Additional from './Additional';

const Tab = createBottomTabNavigator();

function BottomTabsStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Additional"
        component={Additional}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsStack;
