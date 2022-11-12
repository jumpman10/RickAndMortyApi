import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column',
      alignItems:'center'
    },
    image: {
      width:300,
      height:300,
      backgroundColor:'white',
      borderWidth:2,
      borderColor:'white',
      borderRadius:150
    },
    imagebg:{
      flex:1
    },
    imagePosition:{
      alignItems:'center',
      marginTop:20
    },
    name:{
      fontSize:45,
      fontFamily:'get_schwifty',
      color:'white'
    },
    seperator:{
      marginTop:25
    },
    info:{
      fontSize:25,
      fontFamily:'get_schwifty',
      color:'white'
    },
    loadingIndicator:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    img:{
      width:100,
      height:100,
    },
    text:{
      fontSize:25,
      fontFamily:'get_schwifty',
      textAlign:'center',
      color:'white',
      backgroundColor:'rgba(0,0,0,0.5)'
    }, 
    textModal:{
      fontSize:18,
      textAlign:'center',
      fontFamily:'get_schwifty',
      color:'white',
      backgroundColor:'black'
    } , 
    containerModal:{
    flex:1,
    height:'100%',
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.4)',
    justifyContent:'center',
    alignItems:'center'
    },
    card:{
    width:'85%',
    height:'90%',
    backgroundColor:'rgba(139, 207, 33, 0.6)',
    borderRadius:20,  
    },
    closePosition:{
    top:'3%',
    alignItems:'center'
    },
    back:{
      position:'absolute',
      top:'3%',
      left:'7%',
    },
    episodes:{
      flexDirection:'row', 
      backgroundColor:'rgb(139, 207, 33)',
      borderWidth:2,
      borderColor:'white',
      marginVertical:15,
      width:150,
      justifyContent:'center'
    }
  });
  