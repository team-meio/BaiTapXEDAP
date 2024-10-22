import React, { useEffect, useState } from 'react';
import { Text, Image, TextInput, TouchableOpacity, View, FlatList, ScrollView} from 'react-native';

const dsNut = [
  {
    id: 1,
    name: 'Donut',
  },
  {
    id: 2,
    name: 'Pink Donut',
  },
  {
    id: 3,
    name: 'Floating',
  },
];

const dsBanh = [
  {
    id :1,
    ten : "Le  hau",
    moTa : "Heo nay",
    gia : 2000,
    hinh : "https://picsum.photos/200/300",
    loaiBanh : "Donut"
  },
    {
    id :2,
    ten : "Le  hau",
    moTa : "Heo nay",
    gia : 2000,
    hinh : "https://picsum.photos/200/300",
    loaiBanh : "Pink Donut"
  },
    {
    id :3,
    ten : "Le nah hau",
    moTa : "Heo nay",
    gia : 2000,
    hinh : "https://picsum.photos/200/300",
    loaiBanh : "Donut"
  },
    {
    id :4,
    ten : "Le oc hau",
    moTa : "Heo nay",
    gia : 2000,
    hinh : "https://picsum.photos/200/300",
    loaiBanh : "Donut"
  },
    {
    id :5,
    ten : "Le cho hau",
    moTa : "Heo nay",
    gia : 2000,
    hinh : "https://picsum.photos/200/300",
    loaiBanh : "Floating"
  },
    {
    id :6,
    ten : "Le heo hau",
    moTa : "Heo nay",
    gia : 2000,
    hinh : "https://picsum.photos/200/300",
    loaiBanh : "Donut"
  },
]

export default function Manhinh1({ navigation }) {
  const [nut, setnut] = useState([]);
  const [banh,setBanh] = useState([])
  const [loai,setloai] = useState("")
  const [timKiem,settimKiem] = useState("")
  useEffect(()=>{
    setnut(dsNut)
    setBanh(dsBanh)
    setloai("Donut")
  }, [])

  useEffect(()=>{
    const mantMoi = dsBanh.filter(item=> item.ten.includes(timKiem))
    setBanh(mantMoi)
  }, [timKiem])

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View>
        <Text style={{ color: 'gray', fontSize: 15, fontWeight: 700 }}>
          Welcome,Jala!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>
          Choice you Best food{' '}
        </Text>
      </View>
      <View>
        <TextInput
          onChangeText={(data)=>{
            settimKiem(data)
          }}
          style={{
            border: '1px solid gray',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
          placeholder={'Search food'}
          placeholderTextColor={'gray'}
        />
      </View>

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
         horizontal={true} data={nut} keyExtractor={(item)=>{return item.id}} renderItem={({item, index})=>{
            return <TouchableOpacity onPress={()=>{
              console.log(item.name)
              setloai(item.name)
            }} style={{padding:10, border:"1px solid orange", margin:3, borderRadius:10, backgroundColor: item.name===loai ?"pink":"#fff"}} >
              {item.name}
            </TouchableOpacity>
        }}/>
      </View>
      <View style={{flex:1}}>
        <FlatList
          data={banh} keyExtractor={(item)=>{return item.id}} renderItem={({item, index})=>{
            if(item.loaiBanh === loai)
            return <TouchableOpacity style={{flexDirection:"row",padding:10, border:"1px solid orange", margin:3, borderRadius:10}} onPress={()=>{}}>
              <Image source={{uri:item.hinh}} style={{height:80, width:"30%"}}/>
              <View style={{marginLeft:10, display:"flex", justifyContent:"space-between"}}>
                <Text style={{fontSize:18, fontWeight:700}}>{item.ten}</Text>
                <Text >{item.moTa}</Text>
                <Text style={{fontSize:18, fontWeight:700}}>{item.gia}</Text>
              </View>
            </TouchableOpacity>
        }}/>
      </View>
    </View>
  );
}
