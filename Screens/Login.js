import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,TextInput, Image } from 'react-native'
import React from 'react'
import {  useNavigation } from '@react-navigation/native'

const Login = ({navigation}) => {
  return (
    <View><ImageBackground source={require('../assets/Background.png')}
     style={{ width: '100%', height: '100%' }}>  
        <Text style={{fontSize: 30,marginBottom:120, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 50}}>Login</Text>
        

     <TextInput style={styles.input} placeholder="Email" placeholderTextColor='lightgrey'/>
     <TextInput style={styles.input} placeholder="Password" placeholderTextColor='lightgrey' secureTextEntry/>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Makeup')}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Text style={styles.signup}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('Makeup')} >
              <Image source={require('../assets/google.png')} style={{width: '100%', height: 50, alignSelf: 'center'}}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('Makeup')} >
              <Image source={require('../assets/facebook.png')} style={{width: '100%', height: 50, alignSelf: 'center',margin:5}}/>
       </TouchableOpacity>
      
     </ImageBackground>

    </View>
  )
}

export default Login

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
        marginTop: 30,
        marginBottom: 20,
    },
    signup: {
        color: 'lightblue',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        
        marginBottom: 20,
    },

})