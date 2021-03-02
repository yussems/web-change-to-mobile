import React from 'react';
import {ScrollView} from 'react-native';
import { Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';

import {
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

const {width,height} = Dimensions.get('window')

const image= {uri:'https://www.atolye15.com/img/jumbotron/clients.jpg'}

const Contact = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground style={styles.image} source={image}>
        <ScrollView>
          <View style={styles.container}>
            <Text h3>Got a project? </Text>
            <Text h3 style={{color: '#D10F3A'}}>
              Let's build it together{' '}
            </Text>
            <View style={{width: 300}}>
              <Input style={styles.form} autoFocus placeholder="Your Name" />
              <Input style={styles.form} placeholder="Company Name" />
              <Input
                keyboardType="email-address"
                style={styles.form}
                placeholder="Email"
              />
              <Input
                keyboardType="numeric"
                style={styles.form}
                placeholder="Contact Number"
              />
              <Input
                style={styles.form}
                placeholder="We'd love to hear about your project "
              />
              <View style={{alignItems: 'center'}}>
                <Button
                  title="send"
                  buttonStyle={{
                    width: 150,
                    padding: 20,
                    backgroundColor: '#D10F3A',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{height:100}}/>
        </ScrollView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  image:{
    position:'absolute',
    left:0,
    top:0,
    width:width,
    height:height

    
  }
});
