import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext } from 'react'
import { Button, Modal, StyleSheet, Text, View,TouchableOpacity,TextInput, Alert } from 'react-native';

import  Icon  from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext/authContext';
import { useForm } from '../hooks/useForm';

interface Props {
    visible:boolean;
    onPress: () => void;
    onPress2:()=>void
}
export const ModalEdit = ({visible,onPress,onPress2} : Props) => {
    const navigation = useNavigation()
    const {edit}=useContext(AuthContext)
    const editRealized=()=>{
        edit({name,surname,phone})
        Alert.alert('Edition successfull', 'Successfull',[{
            text:'Ok',
            onPress: onPress2
          }
        ]);

    }  
    
    const { phone, onChange, name,surname } = useForm({
        name: '',
        phone: '',
        surname:'',

      });
      
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

                            <View style ={{marginTop:55}}>
                                <Text style={{marginTop:10,color:'white'}}>Name</Text>
                                <TextInput
                                style={styles.inputs}
                                 onChangeText={ (value) => onChange( value, 'name' ) }
                                 value={name}
                                 maxLength={25}
                                >    
                                </TextInput>
                                <Text style={{marginTop:10,color:'white'}}>Surname</Text>
                                <TextInput
                                style={styles.inputs}
                                onChangeText={ (value) => onChange( value, 'surname' ) }
                                value={surname}
                                maxLength={25}>
                                </TextInput>
                                <Text style={{marginTop:10,color:'white'}}>Phone</Text>
                                <TextInput
                                 style={styles.inputs}
                                 onChangeText={ (value) => onChange( value, 'phone' ) }
                                 value={phone}
                                 keyboardType='numeric'
                                 maxLength={15}>
                                </TextInput>
                               
                            </View>
                           {name ===''|| surname==='' || phone==='' ?
                           (<Button title='edit' onPress={()=>editRealized()} disabled={true} />):
                           (<Button title='edit' onPress={()=>editRealized()} disabled={false} />)} 
                            
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
        backgroundColor:'rgba(139, 207, 33, 0.6)',
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
    logout:{
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
    },
    inputs:{
        backgroundColor:'black',
        borderColor:'white',
        borderWidth:1,
        color:'white',
        marginBottom:5
    }

})