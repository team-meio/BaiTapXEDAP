import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import ManHinh2_v2 from './components/Manhinh2';
const Stack = createStackNavigator();
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Admin from './components/Admin';

function ManHinhOne({ navigation }) {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={{ fontWeight: 600, fontSize: 20, textAlign: 'center' }}>
        A premium online store for sporter and their stylish choice{' '}
      </Text>
      <Image
        source={{ uri: 'https://picsum.photos/271/271' }}
        style={styles.image}
      />
      <Text style={{ fontWeight: 800, fontSize: 20, textAlign: 'center' }}>
        POWER BIKE Shops
      </Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Shops')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pinarello',
    price: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pina Bike',
    price: 1500,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pinarello',
    price: 2700,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pinarello',
    price: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pina Bike',
    price: 1500,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pinarello',
    price: 2700,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pinarello',
    price: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pina Bike',
    price: 1500,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pinarello',
    price: 2700,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pinarello',
    price: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pina Bike',
    price: 1500,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pinarello',
    price: 2700,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pinarello',
    price: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pina Bike',
    price: 1500,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pinarello',
    price: 2700,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pinarello',
    price: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pina Bike',
    price: 1500,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pinarello',
    price: 2700,
  },
];

const Item = ({ product, index }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Detail', { product: product });
    }}>
    <View
      style={{
        marginRight: index % 2 === 0 ? 5 : 0,
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        border: '1px solid black',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
      }}>
      <Image
        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
        style={{ width: '100%', height: '100px', borderRadius: 10 }}
      />
      <Text style={{ fontWeight: 600, fontSize: 15 }}>{product.title}</Text>
      <Text style={{ fontWeight: 700, fontSize: 15 }}>${product.price}</Text>
    </View>
  </TouchableOpacity>
);
function ManHinh2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 20,
          textAlign: 'left',
          width: '100%',
          color: 'red',
          marginBottom: 20,
        }}>
        The Worlds Best Bike
      </Text>
      <View
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              color: 'red',
              padding: '15px',
              border: '1px solid red',
              borderRadius: 15,
              marginRight: 10,
            }}>
            All
          </Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              padding: '15px',
              border: '1px solid red',
              borderRadius: 15,
              marginRight: 10,
            }}>
            Roadbike
          </Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              padding: '15px',
              border: '1px solid red',
              borderRadius: 15,
              marginRight: 10,
            }}>
            Mountain
          </Text>
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <Item product={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }} // Use flexGrow for dynamic content size
          numColumns={2}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Admin"
          screenOptions={{ cardStyle: { flex: 1 } }}>
          <Stack.Screen
            name="Home"
            component={ManHinhOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Shops"
            component={ManHinh2_v2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={ProductScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Admin"
            component={Admin}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 271,
    height: 271,
    marginBottom: 20,
    borderRadius: 10,
  },
  startButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

function ProductScreen({ route }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return <View>Hello</View>;

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: 'flex-start',
  //       alignItems: 'flex-start',
  //       backgroundColor: '#fff',
  //       padding: 20,
  //     }}>
  //     <Image
  //       source={product.image}
  //       style={{
  //         width: '100%',
  //         height: 200,
  //         borderRadius: 10,
  //         marginBottom: 20,
  //       }}
  //     />

  //     <Text
  //       style={{
  //         fontSize: 24,
  //         fontWeight: 'bold',
  //         marginBottom: 10,
  //         color: '#333',
  //       }}>
  //       {product.name}
  //     </Text>

  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         width: '100%',
  //         marginBottom: 20,
  //       }}>
  //       <Text>Spicy tasty donut family</Text>
  //       <Text
  //         style={{
  //           fontSize: 20,
  //           fontWeight: 'bold',
  //           color: '#ff6347',
  //         }}>
  //         {product.price}
  //       </Text>
  //     </View>

  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         marginBottom: 20,
  //         justifyContent: 'space-between',
  //       }}>
  //       <View>
  //         <Text
  //           style={{
  //             fontSize: 16,
  //             color: '#888',
  //             marginRight: 5,
  //           }}>
  //           Delivery in
  //         </Text>
  //         <Text
  //           style={{
  //             fontSize: 18,
  //             fontWeight: 'bold',
  //             color: '#333',
  //           }}>
  //           30 min
  //         </Text>
  //       </View>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //         }}>
  //         <TouchableOpacity
  //           onPress={decreaseQuantity}
  //           style={{
  //             backgroundColor: '#ffc107',
  //             padding: 10,
  //             borderRadius: 5,
  //             alignItems: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               fontSize: 18,
  //               color: '#fff',
  //               fontWeight: 'bold',
  //             }}>
  //             -
  //           </Text>
  //         </TouchableOpacity>
  //         <Text
  //           style={{
  //             marginHorizontal: 20,
  //             fontSize: 18,
  //             fontWeight: 'bold',
  //             color: '#333',
  //           }}>
  //           {quantity}
  //         </Text>
  //         <TouchableOpacity
  //           onPress={increaseQuantity}
  //           style={{
  //             backgroundColor: '#ffc107',
  //             padding: 10,
  //             borderRadius: 5,
  //             alignItems: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               fontSize: 18,
  //               color: '#fff',
  //               fontWeight: 'bold',
  //             }}>
  //             +
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>

  //     <View
  //       style={{
  //         marginBottom: 30,
  //         paddingHorizontal: 20,
  //       }}>
  //       <Text
  //         style={{
  //           fontWeight: '900',
  //           fontSize: 20,
  //         }}>
  //         Restaurant Info
  //       </Text>
  //       <Text
  //         style={{
  //           fontSize: 14,
  //           color: '#666',
  //         }}>
  //         Order a Large Pizza but the size is the equivalent of a medium/small
  //         from other places at the same price range.
  //       </Text>
  //     </View>

  //     <TouchableOpacity
  //       style={{
  //         width: '100%',
  //         backgroundColor: '#ffc107',
  //         paddingVertical: 15,
  //         borderRadius: 30,
  //       }}>
  //       <Text
  //         style={{
  //           fontSize: 18,
  //           fontWeight: 'bold',
  //           color: '#fff',
  //           textAlign: 'center',
  //         }}>
  //         Add to cart
  //       </Text>
  //     </TouchableOpacity>
  //   </View>
  // );
}
