import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_01 from "./components/screen_01"
const Stack = createNativeStackNavigator();

export default function App  ()  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Screen_01} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


