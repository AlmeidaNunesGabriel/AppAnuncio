import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './assets/src/screens/HomeScreen';
import DetailScreen from './assets/src/screens/DetailScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anúncios" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
