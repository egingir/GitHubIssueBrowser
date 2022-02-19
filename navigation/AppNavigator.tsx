import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import IssuesScreen from '../screens/IssuesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createStackNavigator} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen
          name="Details"
          component={IssuesScreen}
          options={{title: 'Issues'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
