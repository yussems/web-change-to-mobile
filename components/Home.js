import React from 'react';
import {ImageBackground} from 'react-native';

import {SafeAreaView} from 'react-native';
import {StatusBar} from 'react-native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';

const image = {uri: 'https://www.atolye15.com/img/jumbotron/bg1.jpg'};

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark" />
        <View style={{flex: 1, marginHorizontal: 20}}>
          <Text style={styles.headerText} h3>
            Top class outsource design & development
          </Text>
          <Text style={{...styles.headerText, color: '#D10F3A'}} h3>
            design & development
          </Text>

          <ImageBackground source={image} style={styles.backimg}>
            <Text style={styles.paraf}>
              We are a team of great minds with high spirits; building products
              that amaze users for more than eleven years. When it comes to
              building a marvelous product for you, we have a lot to offer.
            </Text>
          </ImageBackground>
          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <Button
              buttonStyle={{ width:150, padding:20, backgroundColor: '#D10F3A'}}
              title="ABOUT US"
              onPress={() => navigation.navigate('About Us')}
            />
            <Button
              
              buttonStyle={{width:150, padding:20,  borderColor:'#D10F3A'}}
              type="outline"
              titleStyle={{color: '#D10F3A'}}
              title="GET IN TOUCH"
              onPress={() => navigation.navigate('Contact')}
            />
          </View>
        </View>
        <View style={{height:100}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  backimg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 500,
  },

  headerText: {
    alignItems: 'center',
    color: '#424242',
    textAlign: 'center',
    paddingTop: 20,
  },
  paraf: {
    fontSize: 24,
    paddingTop: 20,
    color: '#717a85',
    position: 'absolute',
    top: 50,
  },
  button: {
    marginBottom: 10,
    
  },
});
