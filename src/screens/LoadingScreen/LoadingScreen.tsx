import React, { useEffect } from 'react'
import {Animated,  StyleSheet, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';

export const LoadingScreen = () => {

  
  const { opacity, fadeIn,} = useAnimation();
  
  useEffect(() => {
    fadeIn()
 
  }, [])
  return (
        
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
    <Animated.Image source={require('../../assest/loading-RyM.png')} resizeMode='cover' 
                    style={{ 
                    ...styles.img,                                        
                    opacity
                    }} />
    </View>
  
  )
}


const styles = StyleSheet.create({
  img:{
    width:100,
    height:100,
  }
})