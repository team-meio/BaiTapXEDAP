import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Screen_01 from "./components/sceen-01"
import Screen_02 from "./components/sceen-02"
import Screen_03 from "./components/sceen-03"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Home" component={Screen_01} />
        <Stack.Screen name="Dashboard" component={Screen_02} />
          <Stack.Screen name="cuoi" component={Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
