import React from 'react'
import {View,Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import Aboutus from './AboutUs';
import Contact from './Contact';


const Stack = createStackNavigator();
function Root() {
  const stackOptions = {
    headerTitleAlign:'center',
    headerTintColor:'white',
    headerTitleStyle: {color:'white',},
    headerStyle: {backgroundColor:'#D10F3A'},

  }
    return (
        <Stack.Navigator  screenOptions={stackOptions}>
          <Stack.Screen  name='Home' component={Home}  />
          <Stack.Screen name='About Us' component={Aboutus}  />
          <Stack.Screen name='Contact' component={Contact}  />
          
        </Stack.Navigator>
    );
  }

export default Root