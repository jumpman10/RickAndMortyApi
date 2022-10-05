import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Dimensions, Image,StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Result, SimpleCharacter } from '../interfaces/characterInterface';
import { RootStackParams } from '../navigation/StackNavigator';




declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParams {}
    }
  }


  

interface Props {
    characters: Result
}
const windowWidth = Dimensions.get('window').width
const windowHeigth = Dimensions.get('window').width

export const FlatListCharacter = ({ characters }: Props) => {

    const navigation = useNavigation();
    
    
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress = {() => navigation.navigate('CharacterScreen',{simpleCharacter : characters} )}
        >
            <View style={{...styles.container,
                        width: windowWidth * 0.5,
                        height:windowHeigth*0.45 }}>
            <View style={{flex:0.25}}/>
            <View style={styles.card} >
            <Image source= {{uri: characters.image}} 
            style={[styles.imgs,characters.status === 'Dead'? styles.red:styles.notcolor &&
                                characters.status === 'Alive'? styles.green:styles.notcolor &&
                                characters.status === 'unknown'? styles.grey:styles.notcolor]} 
                                resizeMode='cover'/>
            
                <Text style={ [styles.name, characters.status === 'Dead'? styles.red:styles.notcolor &&
                                            characters.status === 'Alive'? styles.green:styles.notcolor &&
                                            characters.status === 'unknown'? styles.grey:styles.notcolor]}>
                    {characters.name}
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.status,characters.status === 'Dead'? styles.red:styles.notcolor &&
                                            characters.status === 'Alive'? styles.green:styles.notcolor &&
                                            characters.status === 'unknown'? styles.grey:styles.notcolor
                                            ]}>
                    {characters.status}
                </Text>
                <View style={{flex:1}}/>
                <Text style={[styles.species,characters.status === 'Dead'? styles.red:styles.notcolor &&
                                            characters.status === 'Alive'? styles.green:styles.notcolor &&
                                            characters.status === 'unknown'? styles.grey:styles.notcolor
                                            ]}>
                    {characters.species}
                </Text>
                </View>           
            </View>
            <View style={{flex:0.25}}/>
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
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
    }



});
