import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react'
import { Animated, Image, ImageBackground, TextInput, View,KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';
import { useForm } from '../../hooks/useForm';
import { styles } from './stylesLogin';
import { AuthContext } from '../../context/AuthContext/authContext';



interface Props extends StackScreenProps <any , any>{};

const Login = ({navigation}  : Props) => {

  const { opacity, position, fadeIn, } = useAnimation();
  
  const { mail, onChange, password } = useForm({
    password: '',
    mail: '',
  });
  
  const {singIn, errorMessaje, removeError} = useContext(AuthContext);

  useEffect(() => {
    if(errorMessaje.length === 0 ) return;

    Alert.alert('Login Incorrecto', errorMessaje,[{
        text:'Ok',
        onPress: removeError
      }
    ]);

  }, [errorMessaje])
  
  const onLogin = () =>{
    singIn({  mail, password  })
    Keyboard.dismiss()
  }
  
  
  useEffect(() => {
    fadeIn()
 
  }, [])
  

  
return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
      source={require('../../assest/rick_and_morty1.jpg')}
      style={styles.image}
      resizeMode="cover">
                          <View style={styles.containerView} >     
                                <Animated.Image style={{ 
                                          ...styles.logo,                                        
                                          opacity,
                                          transform: [{
                                            translateY: position
                                        }]
                                      }}
                                      source={require('../../assest/Rick-and-Morty-removebg-preview.png')}/>     
                                <Animated.View style={{ 
                                          ...styles.inputsPosition,
                                          opacity,
                                          transform: [{
                                            translateY: position
                                        }]
                                      }}>
                                    <TextInput
                                      style={styles.input}
                                      placeholder="email"
                                      onChangeText={ (value) => onChange( value, 'mail' ) }
                                      value={mail}
                                    >
                                    </TextInput>
                                    <TextInput
                                      style={styles.input}
                                      placeholder="password"
                                      onChangeText={ (value) => onChange( value, 'password' ) }
                                      value={password}
                                      autoCorrect={false}
                                      secureTextEntry={true}
                                      >                            
                                    </TextInput>
                                </Animated.View>
                                <Animated.View style={{ 
                                          ...styles.positionBtnLogin,
                                          opacity,
                                          transform: [{
                                            translateY: position
                                        }]
                                      }}>
                                    <TouchableOpacity style={{width: 250,height: 50,}}
                                    onPress={()=> onLogin()}
                                    > 
                                      <Image style={styles.btnLogin}
                                      source={require('../../assest/pickle_rick.jpg')}
                                      resizeMode="cover"/>
                                      <Image style={{width:90, height:50,justifyContent:'center',alignSelf:'center',}}
                                      source={require('../../assest/loginpickle.png')}
                                      resizeMode="cover"/>                                  
                                    </TouchableOpacity>
                                </Animated.View>
                               
                          </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  )
}

export default Login


