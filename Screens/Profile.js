import { ImageBackground, StyleSheet, Text, Touchable, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
        <ImageBackground source={require('../assets/Background.png')}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 50}}>Profile</Text>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 30,
        marginTop: 50,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

})