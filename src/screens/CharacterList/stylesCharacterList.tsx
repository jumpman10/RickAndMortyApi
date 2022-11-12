import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    logo: {
        width: 300,
        height: 90,
      },
    logoPosition:{
        
        alignItems:'center',
    },
    image: {
        flex: 1,
      },
    loadingIndicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
    header:{
      width:'100%', 
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(139, 207, 33, 0.3)'
    },
    footer:{
        width:'100%',
        flexDirection:'row', 
        height:50, 
        position:'absolute',
        bottom:'0%',
        backgroundColor:'rgba(139, 207, 33, 1)'
    },
    footerItem:{
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,1)',
        width:50,
        borderRadius:50
    },
    img:{
      width:100,
      height:100,
    },


    containerss: {
      marginVertical:'3%',
      flex:5,
      flexDirection:'row',
  
  },
  itemText: {
      flex:1,
      fontSize: 15,
      color:'#04b4cc',
      fontWeight:'500',
      marginHorizontal:5,
      textAlign:'center',
      fontFamily:'get_schwifty',
  },
  imgs:{
      width:'100%',
      height:'100%',
      borderRadius:150,
      position:'absolute',
      borderWidth:4,
      borderColor:'red',
  },
  card:{
      flex:4.5,
     
  },
  name:{
      fontSize:18,
      textAlign:'center',
      backgroundColor:'green',
      position:'absolute',
      bottom:'10%',
      width:'100%',
      fontFamily:'get_schwifty', 
      color:'white',
  },
  info:{
      flexDirection:'row',
      height:60,
      alignItems:'center',
      borderWidth:2,
      borderTopWidth:0,
      borderColor:'white',
      backgroundColor:'rgba(178, 218, 43, 0.7)'
  },
  status:{
      fontSize:14,
      textAlign:'center',
      fontFamily:'get_schwifty', 
      color:'white',
      width:60,
      justifyContent:'center'
  },
  species:{
      fontSize:14,
      textAlign:'center',
      fontFamily:'get_schwifty', 
      color:'white',
      width:60,
  },
  red:{
      backgroundColor:'#DA0B0B',
      borderColor:'red',
  },
  grey:{
      backgroundColor:'grey',
      borderColor:'grey',
  },
  green:{
      backgroundColor:'#1D8348',
      borderColor:'#1D8348',
  },
  notcolor:{
      backgroundColor:'black',
      borderColor:'white',
  },
  paginator:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
    
  },
  paginatiobtn:{
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:12.5,
    marginBottom:3
  }

});





