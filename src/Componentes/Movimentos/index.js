import React,{ useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Movimentos({data}) {

    const [ valores, setValores] = useState(false);

 return (
     <TouchableOpacity style={styles.container}
     onPress= {()=>setValores(!valores)}>
         
         <Text style={styles.data}>{data.data}</Text>
         <View style={styles.content}>
             <Text style={styles.label}>{data.label}</Text>
            
             { valores ? (
                 <Text style={data.type===1 ? styles.valor : styles.retiradas}>
                 R${data.valor}</Text>
             ) : (
                 <View style={styles.esconderValor}>

                 </View>
             )}
             
         </View>
     </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:16,
        marginBottom:24,
        borderBottomWidth:0.5,
    },
    content:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginEnd:16,
       marginBottom:8,
    },
    data:{
       color:'#dadada',
       fontWeight:'bold',
       fontSize:20,
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
    esconderValor:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#dadada',
        borderRadius:8,
    }
})