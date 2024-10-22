import React, { useEffect, useState } from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
const dsloaibanh = [
  {
    id: 1,
    ten: 'Donut',
  },
  {
    id: 2,
    ten: 'Pink Donut',
  },
  {
    id: 3,
    ten: 'Floating',
  },
];

const DSbanh = [
  {
    id: 1,
    ten: 'tasgy',
    mota: 'xwhwhdiuk',
    gia: 1000,
    anh: 'https://picsum.photos/id/237/200/300',
    loai: 'Donut',
  },
  {
    id: 2,
    ten: 'tasgyah',
    mota: 'xwhwhdiuk',
    gia: 1000,
    anh: 'https://picsum.photos/id/237/200/300',
    loai: 'Pink Donut',
  },
  {
    id: 3,
    ten: 'tasgyaqfa',
    mota: 'xwhwhdiuk',
    gia: 1000,
    anh: 'https://picsum.photos/id/237/200/300',
    loai: 'Floating',
  },
];

const api = 'https://6717b435b910c6a6e0298fa8.mockapi.io/';

fetch(api)
  .then((res) => res.json())
  .then((data) => {});

export default function ManHinh2() {
  const [loai, setloai] = useState([]);
  const [banh, setbanh] = useState([]);
  const [nutt, setnutt] = useState('');
  const [timkiem, settimkiem] = useState('');

  useEffect(() => {
    fetch(api + 'loai')
      .then((res) => res.json())
      .then((data) => {
        // loaiDoAn
        setloai(data);
      });
    fetch(api + 'banh')
      .then((res) => res.json())
      .then((data) => {
        setbanh(data);
      });

    setnutt('Donut');
  }, []);

  useEffect(() => {
    if (timkiem == '') {
      fetch(api + 'banh')
        .then((res) => res.json())
        .then((data) => {
          setbanh(data);
        });
      return;
    }
    fetch(api + 'banh/' + timkiem)
      .then((res) => res.json())
      .then((data) => {
        setbanh([data]);
      });
  }, [timkiem]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 700, color: 'gray' }}>
          Webcome,jaLa?
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>heloo</Text>
      </View>
      <View>
        <TextInput
          onChangeText={(search) => {
            settimkiem(search);
          }}
          placeholder={'nvhg'}
          placeholderTextColor={'gray'}
          style={{
            border: '1px solid gray',
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={loai}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setnutt(item.ten);
                }}
                style={{
                  border: '1px solid orange',
                  padding: 10,
                  borderRadius: 10,
                  margin: 5,
                  backgroundColor: item.ten === nutt ? 'pink' : '#fff',
                }}>
                <Text>{item.ten}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{flex:1}}>
        <FlatList data={banh} numColumns={2} keyExtractor={(item)=> item.id}
        renderItem={({item,index})=>{
          return <View
            style={{width:"48%", height:100, border:"1px solid pink", padding:5,margin:3, borderRadius:10}}
          >
            <Image source={{uri: item.anh}} style={{width:"100%", height:50}}/>
            <Text style={{fontSize:18, fontWeight:700, textAlign:"center"}}>{item.ten}</Text>
          </View>
        }}
        /> 
      </View>
    </View>
  );
}
