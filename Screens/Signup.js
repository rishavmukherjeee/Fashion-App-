import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const Signup= ({navigation}) => {
  return (
    <View><ImageBackground source={require('../assets/Background.png')}
     style={{ width: '100%', height: '100%' }}>  
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 50}}>Signup</Text>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor='lightgrey'/>

     <TextInput style={styles.input} placeholder="Email" placeholderTextColor='lightgrey'/>
     <TextInput style={styles.input} placeholder="Password" placeholderTextColor='lightgrey' secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Makeup')}>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

     </ImageBackground>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginTop: 50,
        marginBottom: 20,
    },
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
    forgot: {
        color: 'lightblue',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop: 50,
        marginBottom: 20,
    },
    signup: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop: 50,
        marginBottom: 20,
    },

})