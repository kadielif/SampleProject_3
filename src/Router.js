import * as React from 'react';
import { Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './Pages/HomeScreen';
import DetailsScreen from './Pages/DetailsScreen';
import ModelScreen from './Pages/ModelScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';


/* 
const Stack = createStackNavigator({
    Home:HomeScreen,
    Details:DetailsScreen
},
{
    initialRouteName:"Home"
});
 */

const Stack = createStackNavigator();
export default function Stact({navigation})
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"    >
     
          <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
             
              options={{
                  title:'AnaSayfa',
                  headerTitleAlign:'center', 
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => alert('model')}
                      style={{marginRight:20}}
                      
                      
                    >
                    <Text>Info</Text>
                    </TouchableOpacity>


                  ), 
                  headerStyle: {backgroundColor: '#C0BED6'},
                  headerTintColor: '#fff', 
                  headerTitleStyle: { fontWeight: 'bold'}
                }}  
          />

          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Modal" component={ModelScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );

 
}













