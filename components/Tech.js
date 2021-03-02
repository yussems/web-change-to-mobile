import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
const Tech = ({title}) => {
  return (
      <View style={styles.main}>
        <Icon name="dot-circle-o" size={30}  type='font-awesome' color="#D10F3A" />
        <Text style={{fontSize: 20}}> {title}</Text>
      </View>
  );
};

export default Tech;

const styles = StyleSheet.create({
  main: {
    width: 175,
    height: 50,
    flexDirection: 'row',
    
  },
});
