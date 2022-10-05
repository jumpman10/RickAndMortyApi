import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerView: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center'
    },
    image: {
      flex: 1,
    },
    input: {
      width:300,
      height: 40,
      margin: 15,
      borderBottomWidth: 1,
      paddingHorizontal: 10,
      paddingVertical:10,
      borderColor:'rgba(255,255,255,0.4)',
      color:'rgb(255, 255, 255)'
    },
    inputsPosition:{
      position: 'absolute',
      bottom: '20%'
    },
    logo: {
      width: 300,
      height: 90,
      position: 'absolute',
      top: '9%'
    },
    btnLogin:{
      width: 250,
      height: 50,
      borderRadius:20,
      position:'absolute'
    },
    positionBtnLogin:{
      position: 'absolute',
      bottom: '10%'
    },
    textLogin:{
      justifyContent:'center',
      alignSelf:'center',
      fontSize:33,
      color:'#B7E4F9FF'
    }
  
  })