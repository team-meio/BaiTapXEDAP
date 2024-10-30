import React, { useState } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Sceen_01({ navigation }) {
  const [name, setName] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
      }}>
      <Image
        style={{ width: '100%', height: '40%', borderRadius: 20 }}
        source={{ uri: 'https://picsum.photos/200/300' }}></Image>
      <Text style={{ color: 'purple', fontSize: 20, fontWeight: 700 }}>
        {' '}
        Manage your task
      </Text>
      <TextInput
        style={{
          border: '1px solid black ',
          width: '80%',
          padding: 10,
          borderRadius: 20,
          color: 'gray',
          fontWeight: 700,
        }}
        placeholder="enter your name..."
        
        onChangeText={(text)=>{
          setName(text)

        }}
        
        ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: '#0081f1',
          borderRadius: 20,
          width: '70%',
          padding: 15,
        }}
        onPress={() => {
          if(name==""){
            return
          }
          navigation.navigate('Dashboard', {name:name});
          
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 15,
            color: '#ffff',
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
