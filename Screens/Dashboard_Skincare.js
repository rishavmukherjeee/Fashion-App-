import React from 'react';
import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const Dashboard_makeup = ({ navigation }) => {
  const name = 'aishwariya';

  const handlepress = ({ nativeEvent }) => {
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
       
<Text style={styles.greet}>hi, {name} text</Text>
        <TouchableOpacity onPress={handlepress}>
          <Image source={require('../assets/Buttons/Skincare.png')} style={styles.image} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          <View style={styles.row}>
            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  title="Top 10 South African beaches"
                  style={styles.cardImage}
                />
              </View>
              <CardTitle subtitle="Number 6" />
              <CardContent text="Clifton, Western Cape" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {}} title="Share" color='black' />
                <CardButton onPress={() => {}} title="Explore" color='black' />
              </CardAction>
            </Card>

            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  title="Another card"
                  style={styles.cardImage}
                />
              </View>
              <CardTitle subtitle="Subtitle" />
              <CardContent text="Card content" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {}} title="Button 1" color='black' />
                <CardButton onPress={() => {}} title="Button 2" color='black' />
              </CardAction>
            </Card>
          </View>

          <View style={styles.row}>
            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  title="Card 3"
                  style={styles.cardImage}
                />
              </View>
              <CardTitle subtitle="Subtitle" />
              <CardContent text="Card content" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {}} title="Button 1" color='black' />
                <CardButton onPress={() => {}} title="Button 2" color='black' />
              </CardAction>
            </Card>

            <Card style={[styles.card, { height: cardHeight }]}>
              <View style={styles.cardImageContainer}>
                <CardImage
                  source={require('../assets/product.png')}
                  title="Card 4"
                  style={styles.cardImage}
                />
              </View>
              <CardTitle subtitle="Subtitle" />
              <CardContent text="Card content" />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {}} title="Button 1" color='black' />
                <CardButton onPress={() => {}} title="Button 2" color='black' />
              </CardAction>
            </Card>
          </View>
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
  greet: {
    fontSize: 30,
    color: '#000',
    paddingTop: 30,
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
    borderColor: 'black', // Set card border color to black
    borderWidth: 1, 
    borderRadius:10,// Set card border width
    // Set card background color to very light gray
  },
  cardImageContainer: {

    height: '50%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    borderBottomWidth: 1,// Add margin bottom to separate image from title
  },
  cardImage: {
    backgroundColor: '#e9e9e9',
    top:10,
    borderRadiustop:10,
  },
});

export default Dashboard_makeup;
