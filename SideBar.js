import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {
  
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Linking } from 'react-native';

const images = {
  uri: 'https://avatars.githubusercontent.com/u/1424101?s=200&v=4',
};

const ScreenStyle = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'center',
          
          elevation:10
        }}>
        <Image source={images} style={{width: 150, height: 150}} />
      </View>
      <View>
        <DrawerItemList  activeBackgroundColor={'transparent'} labelStyle={{fontSize:24,color:'#D10F3A',}} {...props} />
      </View>
      <DrawerItem  label="Official Site" labelStyle={{fontSize:24}} onPress={() => Linking.openURL('https://www.atolye15.com/')} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
    
});

export default ScreenStyle;
