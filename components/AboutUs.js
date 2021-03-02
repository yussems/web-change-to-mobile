import React,{useRef} from 'react';
import { StyleSheet } from 'react-native';
import {ScrollView} from 'react-native';
import {View, FlatList, Image, Dimensions, ImageBackground,Animated} from 'react-native';
import {Text, Button} from 'react-native-elements';


const {width, height} = Dimensions.get('screen');

const images = [
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-1.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-2.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-3.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-4.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-5.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-6.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-7.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-8.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-9.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-10.jpg',
  'https://www.atolye15.com/img/photos/about-us/atolye15-about-11.jpg',
];

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
}));

const backImg = 'https://www.atolye15.com/img/jumbotron/bg2.jpg';

function Aboutus() {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View>
        <ImageBackground
          style={{width, height, resizeMode: 'cover'}}
          source={{uri: backImg}}>
          <View
            style={{
              width,
              height: height / 2,
            }}>
            <View
              style={{
                marginHorizontal: 20,
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text h3>Good team</Text>
              <Text h3 style={{color: '#D10F3A'}}>
                great products
              </Text>
              <Text style={{fontSize: 24, marginTop: 20}}>
                We are a close-knit team of developers, designers and project
                managers who provide the most modern web and mobile technologies
                for your needs and build awesome products.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                  lineHeight: 22,
                  color: '#717a85',
                }}>
                We believe that every great team is a union of distinctive
                individuals who are highly-skilled professionals and they
                constantly keep on searching for better ways to create products.
              </Text>
            </View>
          </View>
          <View style={{width, height: height / 2}}>
            <Animated.FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              keyExtractor={(item) => item.key}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollY } } }],
                { useNativeDriver: true }
              )}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',

                      width,
                      height: height / 3,
                    }}>
                    <View
                      style={{
                        borderRadius: 18,
                        borderWidth: 10,
                        borderColor: 'white',
                        elevation: 10,
                      }}>
                      <Image
                        source={{uri: item.photo}}
                        style={{
                          width: width / 1.2,
                          height: height / 4,
                          resizeMode: 'cover',
                          borderRadius: 8,
                        }}
                      />
                    </View>
                  </View>
                );
              }}
            />
            <View style={styles.page}>
              {images.map((_,index)=> {
                return <View key={index} style={[styles.dot]}/>
              })}
              <Animated.View style={[styles.dotIndicator,
             {transform: [{
               translateX:Animated.divide(scrollY,height).interpolate({
                 inputRange:[0,1],
                 outputRange:[0,DOT_INDICATOR_SIZE]
               })
             }]}
            ]} />

              
            </View>
          </View>
          
        </ImageBackground>
      
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    marginBottom:8,
    
    backgroundColor: '#D10F3A'
    
  },
  page:{
    position:'absolute',
    height:height / 5,
    left: width/1.2 /2 ,
    flexDirection:'row',
    bottom:20
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: 50,
    borderWidth: 1,
    
    position: "absolute",
    borderColor: "#D10F3A",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
})

export default Aboutus;
