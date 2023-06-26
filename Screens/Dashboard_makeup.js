import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import ProductCardContainer from '../components/ProductCardContainer';

// Rest of the code remains the same

const Dashboard_makeup = ({ navigation }) => {
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
        <TouchableOpacity onPress={handleNavigation}>
          <Image source={require('../assets/Buttons/Makeup.png')} style={styles.image} />
          <Text style={styles.weekly}>weekly top 4</Text>
          <Text style={styles.perfect}>perfect-for-you based on your goals</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          <View style={styles.row}>
            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
              </View>
              <CardTitle  title="nykaa" />
              <CardContent text="nyx professional Makeup" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {navigation.navigate('Details')}} title="View" style={{ borderRadius: 20, borderWidth: 1 }} color="black" />
                <TouchableOpacity
                  style={[styles.heartButton, isHeartPressed[0] && styles.heartButtonPressed]}
                  onPress={() => handlePress(0)}
                >
                  <Image
                    source={isHeartPressed[0] ? require('../assets/redheart.png') : require('../assets/heart.png')}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dotsButton}>
                  <Image source={require('../assets/dots.png')} style={styles.dotsIcon} />
                </TouchableOpacity>
              </CardAction>
            </Card>

            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
              </View>
              <CardTitle  title="nykaa" />
              <CardContent text="nyx professional Makeup" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {navigation.navigate('Details')}} title="View" style={{ borderRadius: 20, borderWidth: 1 }} color="black" />
                <TouchableOpacity
                  style={[styles.heartButton, isHeartPressed[1] && styles.heartButtonPressed]}
                  onPress={() => handlePress(1)}
                >
                  <Image
                    source={isHeartPressed[1] ? require('../assets/redheart.png') : require('../assets/heart.png')}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dotsButton}>
                  <Image source={require('../assets/dots.png')} style={styles.dotsIcon} />
                </TouchableOpacity>
              </CardAction>
            </Card>
          </View>

          <View style={styles.row}>
            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
              </View>
              <CardTitle  title="nykaa" />
              <CardContent text="nyx professional Makeup" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {navigation.navigate('Details')}} title="View" style={{ borderRadius: 20, borderWidth: 1 }} color="black" />
                <TouchableOpacity
                  style={[styles.heartButton, isHeartPressed[2] && styles.heartButtonPressed]}
                  onPress={() => handlePress(2)}
                >
                  <Image
                    source={isHeartPressed[2] ? require('../assets/redheart.png') : require('../assets/heart.png')}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dotsButton}>
                  <Image source={require('../assets/dots.png')} style={styles.dotsIcon} />
                </TouchableOpacity>
              </CardAction>
            </Card>

            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
              </View>
              <CardTitle  title="nykaa" />
              <CardContent text="nyx professional Makeup" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {navigation.navigate('Details')}} title="View" style={{ borderRadius: 20, borderWidth: 1 }} color="black" />
                <TouchableOpacity
                  style={[styles.heartButton, isHeartPressed[3] && styles.heartButtonPressed]}
                  onPress={() => handlePress(3)}
                >
                  <Image
                    source={isHeartPressed[3] ? require('../assets/redheart.png') : require('../assets/heart.png')}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dotsButton}>
                  <Image source={require('../assets/dots.png')} style={styles.dotsIcon} />
                </TouchableOpacity>
              </CardAction>
            </Card>
          </View>
          <ProductCardContainer/>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
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
    paddingHorizontal: 20,
    marginTop: 20,
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

export default Dashboard_makeup;
