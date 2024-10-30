import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: 1, content: 'di hoc' },
  { id: 2, content: 'di hoc' },
  { id: 3, content: 'di hoc' },
  { id: 4, content: 'di hoc' },
];

export default function ManHinh2({ navigation, route }) {
  const [value, setValue] = useState(data);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   if (text) {
  //     const newItem = { id: new Date().getMilliseconds(), content: text };
  //     setValue((prevValue) => [...prevValue, newItem]);
  //   }
  // }, [text]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.content.toLowerCase().includes(search.toLowerCase())
    );
    setValue(filteredData);
  }, [search]);

  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20 }}>
        <Image source={require('../Icon Button 12.png')} />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('../Avatar 31.png')} />
          <View>
            <Text>Hi Thay</Text>
            <Text>name....</Text>
          </View>
        </View>
      </View>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '80%',
          padding: 10,
          borderRadius: 20,
          color: 'gray',
          fontWeight: '700',
          marginBottom: 20,
        }}
        placeholder="enter your name..."
      />

      <FlatList
        data={value}
        keyExtractor={(item) => item.id.toString()}  // Chuyển đổi id thành chuỗi
        renderItem={({ item }) => (
          <View style={{ display: 'flex', backgroundColor: 'pink', flexDirection: 'row', justifyContent: 'space-between', width: 250, padding: 15, borderRadius: 20, marginBottom: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image source={require('../mdi_marker-tick.png')} />
              <Text>{item.content}</Text>
            </View>
            <Image source={require('../iconamoon_edit-bold.png')} />
          </View>
        )}
        contentContainerStyle={{ display: 'flex', width: '100%', alignItems: 'center' }}
      />

      <TouchableOpacity
        style={{ backgroundColor: '#0081f1', borderRadius: 99990, width: 50, padding: 15 }}
        onPress={() => navigation.navigate('cuoi')}
      >
        <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 15, color: '#fff' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
