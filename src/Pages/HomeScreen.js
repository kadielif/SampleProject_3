
import * as React from 'react';
import { View, Text, Button, TextInput,StyleSheet,ScrollView,Modal,modalVisible } from 'react-native';

export default function HomeScreen ({ navigation }) {
  
  
 
   const [kilo,boy, onChangeText] = React.useState('Kilonuzu giriniz');
   
    return (
      
      <View style={styles.container}>
        
        <View style={styles.upper}>
        <Text style={styles.header}>BUGÜN NE KADAR SU İÇMELİYİM?</Text>
        <ScrollView>
          <View style={styles.inputs}>
            <TextInput
            value={kilo}  
            placeholder='Kilo'
            onChangeText={text => onChangeText(text)}
            style={styles.txtinput}
            /> 

            <TextInput
            value={boy}
            placeholder='Boy'
            onChangeText={text => onChangeText(text)}
            style={styles.txtinput}
            /> 
            
          </View>
         
          <Button
            color='grey'
            title="HESAPLA"
          
          />

        </ScrollView>

       
        </View>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingVertical:80,
      backgroundColor:'#E7EFF9'

    },
    upper:{
      position:'absolute',
      left:'7%',
      top:'17%',
      width:'85%',
      height:'85%',
     
      alignItems: 'center',
       justifyContent: 'flex-start',
       marginTop:20,
       backgroundColor: '#C0BED6',
       borderRadius:20,
      


    },
    txtinput: {
     borderWidth:0.8,
     marginBottom:8,
     width:300,
     height:50,
     borderRadius:5,
     borderColor:'#C3CED6' ,
     backgroundColor:'white',
     color:'#A9B3C1',

    },
    header: {
     marginTop:50,
     marginBottom:'10%',
     fontSize:20,
     fontWeight:'bold',
     color:'white',
     borderColor:'white',
    },
    inputs: {
      marginBottom:40,
    },
    btn:{
      backgroundColor:'grey'
    }
 

    
  });
  

  
