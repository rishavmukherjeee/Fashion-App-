import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import ProductGridViewContainer from '../components/ProductGridViewContainer';
import ProductCardsContainer from '../components/ProductCardsContainer';
import ProductCardContainer from '../components/ProductCardContainer';

// Rest of the code remains the same

const Dashboard_Skincare = ({ navigation }) => {
  const name = 'aishwariya';
  const [isHeartPressed, setIsHeartPressed] = useState(Array(4).fill(false));

  const handlePress = (index) => {
    setIsHeartPressed((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const handleNavigation = ({ nativeEvent }) => {
    const { locationX } = nativeEvent;
    const { width } = Dimensions.get('window');
    const imageCenter = width / 2;

    if (locationX < imageCenter) {
      // Navigation action for left part of the image (Makeup)
      navigation.navigate('Makeup');
    } else {
      // Navigation action for right part of the image (Skincare)
      navigation.navigate('Skincare');
    }
  };

  const { height } = Dimensions.get('window');
  const cardHeight = height * 0.6;

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Background.png')} style={{ width: '100%', height: '100%' }}>
        <Text style={styles.name}>hi, {name} !</Text>
        <Text style={styles.beauty}>beauty starts here</Text>
        <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginHorizontal: 30,
      marginBottom: 5,
      marginTop: 5,
    }}>
      <Image source={require('../assets/search.png')} style={{
        width: 20,
        height: 20,
        marginRight: 10,
      }} />
      <TextInput style={{
        flex: 1,
        height: 40,
        fontSize: 16,
        color: 'black',
      }} placeholder="Search here" placeholderTextColor='black' />
    </View>
        <TouchableOpacity style={{position:'absolute',right:30,top:30}}onPress={()=>navigation.navigate('Profile')}>
        <Image source={require('../assets/dehaze.png')} style={{width:20,height :20}} />
        </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigation}>
                      <Image source={require('../assets/Buttons/Skincare.png')} style={styles.image} />
                    
                    </TouchableOpacity>
        <ScrollView >
        <Text style={styles.weekly}>weekly top 4</Text>
                      <Text style={styles.perfect}>perfect-for-you based on your goals</Text>
          <View style={styles.roww} >
                      <View style={styles.gap}>
                      <ProductCardsContainer
                        matchScoreText={require("../assets/u26a1-2-21.png")}
                        matchScoreDescription="super match"
                        onRectanglePressablePress={() =>
                          navigation.navigate("Details")
                        }/>
                      </View>
                      <View style={styles.gap}>
                      <ProductCardsContainer
                      matchScoreText={require("../assets/u2b50-2-1.png")}
                      matchScoreDescription="good match"
                      propHeight="unset"
                      propMarginLeft={4}
                      onRectanglePressablePress={() =>
                        navigation.navigate("Details")
                      }/></View>
            </View>
      <View style={styles.roww} >
                      <View style={styles.gap}>
                      <ProductCardsContainer
                        matchScoreText={require("../assets/u2604-1-1.png")}
                        matchScoreDescription="Average match"
                        onRectanglePressablePress={() =>
                          navigation.navigate("Details")
                        }
                      /></View>
                      <View style={styles.gap}>
                      <ProductCardsContainer
                      matchScoreText={require("../assets/u1f4a5-1.png")}
                      matchScoreDescription="Poor match"
                      propHeight="unset"
                      propMarginLeft={4}
                      onRectanglePressablePress={() =>
                        navigation.navigate("Details")
                      }/></View>
            </View>
            
            <View style={styles.cardContainer}>
            <ProductCardContainer/>
            </View>
        </ScrollView>
        <Image source={require('../assets/Bottom.png')} style={{ height: '10%', width: '100%' }}></Image>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
  
  },
  cardContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    marginLeft: 100,
  },
  roww: {
    flexDirection: 'row',
    justifyContent: 'center',
    
    
  },
  gap: {
    margin:'3%',
  },
  image: {
    
    resizeMode: 'contain',
    width: '90%',
    height: 51,
    paddingLeft: 20,
    marginLeft: 15,
    marginTop: 20,
  },
  beauty: {
    fontSize: 28,
    color: '#000',
    paddingLeft: 20,
  },
  weekly: {
    fontSize: 28,
    color: '#000',
    paddingLeft: 20,
    paddingTop: 10,
  },
  perfect: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 16,
    color: '#000',
    paddingTop: 10,
    paddingLeft: 20,
  },
  cardContainer: {
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderBottomColor: 'black', // Set the color of the bottom border
  },
  cardImageContainer: {
    height: '50%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
     // Add margin bottom to separate image from title
  },
  cardImage: {
    backgroundColor: '#e9e9e9',
    alignContent: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    right: '14%',
    
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    borderBottomWidth: 1,
  },
  dotsButton: {
    backgroundColor: 'transparent',
    width: '20%',
    height: '25%',
    marginLeft: 10,
  },
  dotsIcon: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    width: '20%',
    height: '25%',
    marginLeft: 10,
  },
  heartIcon: {
    width: '120%',
    height: '100%',
  },
  heartButtonPressed: {
  },
});

export default Dashboard_Skincare;
