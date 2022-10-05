import axios from 'axios';
import React, { useContext } from 'react'
import { Button, Modal, StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext/authContext';
import { useForm } from '../hooks/useForm';




interface Props {
    visible:boolean;
    onPress: () => void;
}
export const ModalEdit = ({visible,onPress} : Props) => {
   


return (
   
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            >
            <View style={styles.container}> 
                    <View style={styles.card} >
                        <TouchableOpacity onPress={onPress} style={styles.closePosition}>
                            <Icon name="close-circle-outline" size={50} color="black"/>
                        </TouchableOpacity>
                    
                        <View style={styles.itemsPosition}>
                            <View style={styles.theme}>
                                <Text style={styles.themeText}>Cambiar Tema</Text>
                            </View>
                            <View   style ={{marginTop:55}}>
                              
                            </View>
                            
                        </View>       
                    </View>
            </View>
        </Modal>
    
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        width:'85%',
        height:'75%',
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:20,
         
    },
    closePosition:{
        top:'3%',
        alignItems:'center'
    },
    itemsPosition:{
        top:'7%'
    },
    themeText:{
        fontSize:30,
        color:'white',
        textAlign: 'center',
        backgroundColor:'black'
    },
    theme:{
        top:'20%'
    },
    ligth:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:70,
    },
    dark:{
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:70,
    },
    themesPosition:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        top:'20%',
        backgroundColor:'pink'
    },
    logout:{
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
    }

})