import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import FilmsMain from './src/screens/FilmsMain';
import EpisodeMain from './src/screens/EpisodeMain';
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();




export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ana Sayfa" component={Home} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Filmler" component={FilmsMain} />
        <Tab.Screen name="Diziler" component={EpisodeMain} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



