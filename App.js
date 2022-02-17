import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import FilmsMain from './src/screens/FilmsMain';
import EpisodeMain from './src/screens/EpisodeMain';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
// logo ve mesaj bildirim
// consolları temizle
//  ana sayfa
//searchbar
//assets kullanmadıklarını sil
//fonts ekle



export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Ana Sayfa') {
              iconName = focused
                ? 'home-sharp'
                : 'home-sharp';
            } else if (route.name === 'Filmler') {
              iconName = focused ? 'film-sharp' : 'film-sharp';
            } else if (route.name === 'Diziler') {
              iconName = focused ? 'library-sharp' : 'library-sharp';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'white',
        })}>
        <Tab.Screen name="Ana Sayfa" component={Home} options={{

          headerStyle: {
            backgroundColor: 'black'
          }, tabBarActiveTintColor: "red", tabBarInactiveBackgroundColor: "black", tabBarActiveBackgroundColor: "black", headerTintColor: "white",
        }}
        />

        <Tab.Screen name="Filmler" component={FilmsMain} options={{
          headerStyle: {
            backgroundColor: 'black'
          }, tabBarActiveTintColor: "red", tabBarInactiveBackgroundColor: "black", tabBarActiveBackgroundColor: "black", headerTintColor: "white"
        }} />
        <Tab.Screen name="Diziler" component={EpisodeMain} options={{
          headerStyle: {
            backgroundColor: 'black'
          }, tabBarActiveTintColor: "red", tabBarInactiveBackgroundColor: "black", tabBarActiveBackgroundColor: "black", headerTintColor: "white"
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  deneme: {
    backgroundColor: "black",

  }
});

