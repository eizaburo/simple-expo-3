import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import Contact from './screens/Contact';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='home' color={color} size={size} />
            ),
          }}
        />
        <tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='mail' color={color} size={size} />
            ),
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
