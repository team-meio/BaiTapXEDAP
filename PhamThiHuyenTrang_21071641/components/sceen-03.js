import React ,{useState}from"react"
import{View,Text,Image,TextInput,TouchableOpacity}from"react-native"
export default function ManHinh3({navigation}){
  const [name,setName]=useState("")
   return (
    <View
      style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: '20px',
        }}>
        <Image source={require('../Icon Button 12.png')}></Image>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('../Avatar 31.png')} style={{}}></Image>
          <View>
            <Text>Hi ha</Text>
            <Text>name.... </Text>
          </View>
        </View>
      </View>
      <Text style={{fontSize:20,fontWeight:800,marginBottom:15}}>Add Your Job</Text>
      <TextInput
        style={{
          border: '1px solid black ',
          width: '80%',
          padding: 10,
          borderRadius: 20,
          color: 'gray',
          fontWeight: 700,
          marginBottom: 20,
        }}
        placeholder="enter your name..."
        onChangeText={(text) => {
          setName(text)
        }}></TextInput>

      
      <TouchableOpacity
        style={{
          backgroundColor: '#0081f1',
          borderRadius: 99990,
          width: '50%',
          padding: 15,
        }}
        onPress={() => {
          if(name==""){
            return
          }
          navigation.navigate('Dashboard',{text:name});
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 15,
            color: '#ffff',
       
         
          }}>
          FINISH->
        </Text>
      </TouchableOpacity>
      <Image source={require("../Image 95.png")} style={{width:"60%",height:"40%"}}></Image>
    </View>
  );
}