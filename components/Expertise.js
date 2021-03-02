import React from 'react';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements/';
import { Icon } from 'react-native-elements'



import {data} from './data';
import Tech from './Tech';
const Expertise = () => {
  return (
    <>
      <View style={{marginHorizontal: 20, flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text h3 style={{}}>
            We create
          </Text>
          <Text h3 style={{color: '#D10F3A'}}>
            marvelous products
          </Text>
          <Text style={{fontSize: 24}}>
            Building digital products that “simply work” is our passion. Whether
            it is a basic landing page or a high-traffic social network, we are
            always in!
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text h3 style={{textAlign: 'center'}}>
            We use effective tools & technologies
          </Text>
        </View>
          <Icon name="angle-double-down" size={40}  type='font-awesome' color="#D10F3A" />
      </View>
      <View style={{flex: 1, marginHorizontal:20,alignItems:'center',borderRadius:18,borderColor:'#D10F3A', }}>
        <FlatList
          data={data}
          numColumns={2}
          
          persistentScrollbar={true}
          keyExtractor={(data) => data.id}
          renderItem={({item}) => {
            return <Tech {...item} />;
          }}
        />
      </View>
    </>
  );
};

export default Expertise;
