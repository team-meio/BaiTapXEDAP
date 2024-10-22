import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Screen_01 from "./components/screen_01"
import Screen_02 from "./components/screen_02"

const Stack = createNativeStackNavigator();

export default function App  ()  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManHinh2" >
        <Stack.Screen name="ManHinh2" component={Screen_02} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


