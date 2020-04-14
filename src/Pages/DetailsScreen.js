import * as React from 'react';
import { View, Text, Button } from 'react-native';




export default function DetailsScreen({navigation}) {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Detail1"
        onPress={() => navigation.navigate('Detail1',{title:'Deatil 1'})}
      />
      <Button
        title="Detail2"
        onPress={() => navigation.navigate('Detail2',{title:'Detail 2'})}
      />
     
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}