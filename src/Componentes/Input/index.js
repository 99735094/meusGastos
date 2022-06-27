import React, {useEffect, useState} from 'react';
import { 
  View, 
  Text , 
  TextInput, 
  StyleSheet, 
  TouchableOpacity,
   Button,
   FlatList,
   Alert,
   ScrollView
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import Movimentos from '../Movimentos';
  import uuid from 'react-native-uuid';

const Input = () => {

   const[label, setLabel]= useState('');
   const[valor, setValor]= useState('');
   const[data, setData]= useState('');
   const[type, setType]= useState('');
   const[ mostarLabel, setMostrarLabel]= useState();
   const[ mostarValor, setMostrarValor]= useState();
   const[ mostarData, setMostrarData]= useState();
   const[ mostarType, setMostrarType]= useState();
   const [ valores, setValores] = useState(false);
  

 async function guardar(){
  const usuario = {
   // id:uuid.v4(),
    label,
    valor,
    data,
    type
  }
  await AsyncStorage.setItem('chave', JSON.stringify(usuario));
  getData();
}
async function getData(){
 const response = await AsyncStorage.getItem('chave');
 const usuario = JSON.parse(response);
 //Alert.alert(
 // 'teste',
 //`Label: ${usuario.label}, ${usuario.valor}`
 //)
 if(usuario){
   setMostrarLabel(`${usuario.label}`);
   setMostrarValor(`${usuario.valor}`);
   setMostrarData(`${usuario.data}`);
   setMostrarType(`${usuario.type}`);
 }
 
}

useEffect(()=>{
 getData();
},[]);
 
  
   function renderItem({item, index}){
     return(
       <TouchableOpacity 
       style={styles. caixa}
       onPress= {()=>setValores(!valores)}
       >
          <Text style={styles.data}>{mostarData}</Text>
          <View style={styles.content}>
            <Text style={styles.label}>{mostarLabel}</Text>
          
            { valores ? (
                 <Text style={data.type===1 ? styles.valor : styles.retiradas}>
                 R${mostarValor}</Text>
             ) : (
                 <View style={styles.esconderValor}>

                 </View>
             )}
          </View>
         
       </TouchableOpacity>
     )
   }
   
  return (
    <ScrollView>
      <View style={{justifyContent:'center', alignItems:'center'}}>
         
        <TextInput
        style={styles.input}
        placeholder='label'
        onChangeText={(text)=> setLabel(text)}  
        //onEndEditing={()=>onEndEditing('label')}      
        />
         <TextInput
        style={styles.input} 
        placeholder='valor' 
        onChangeText={(text)=> setValor(text)} 
        //onEndEditing={()=>onEndEditing('valor')}        
        /> 
         <TextInput
        style={styles.input} 
        placeholder='data' 
        onChangeText={(text)=> setData(text)} 
        //onEndEditing={()=>onEndEditing('data')}        
        /> 
         <TextInput
        style={styles.input} 
        placeholder='type' 
        onChangeText={(text)=> setType(text)} 
        //onEndEditing={()=>onEndEditing('type')}        
        /> 
        <TouchableOpacity 
        style={styles.guardar} 
        onPress={guardar}>
          <Text style={styles.txt} >Carregar</Text>
        </TouchableOpacity>
     
      
        <FlatList
        data={mostarLabel}
        renderItem={renderItem}
        //renderItem={({item}) => { <Movimentos data ={item}/>}}
        keyExtractor={item => String(item.id)}
        />   
      </View>
    </ScrollView>
  );
}

export default Input;

const styles= StyleSheet.create({
  container:{
    flex:1,
    marginBottom: 150,
    
    alignItems: 'center',
  },
  input:{
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    padding:10,
    width: '90%',
    height:40,
    borderRadius: 10,
    
  },
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    marginTop: 100,
    color: '#000'
  },
 
  caixa:{
    //flex:1,
    width: 380,
    marginTop:16,
    marginBottom:24,
    borderBottomWidth:0.5,
    },
    data:{
      color:'#dadada',
      fontWeight:'bold',
      fontSize:20,
    },
    content:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginEnd:16,
      marginBottom:8,
    },
    label:{
      fontSize:16,
      fontWeight:'bold'  
    },
    valor:{
        fontSize:20,
        color:'#2ecc71',
        fontWeight:'bold'
    },
    retiradas:{
      fontSize:20,
      color:'#e74c3c',
      fontWeight:'bold'
  },
  guardar: {
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txt: {
    fontSize: 20,
    color: '#fff'
  }
      
})