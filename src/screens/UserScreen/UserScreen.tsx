import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RickAndMortyApi } from '../../api/RickAndMortyApi';
import { ModalEdit } from '../../components/ModalEdit';
import { AuthContext } from '../../context/AuthContext/authContext';
import { useAnimation } from '../../hooks/useAnimation';
import { useDataUser } from '../../hooks/useDataUser';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styleUserScreen';


interface Props extends StackScreenProps<RootStackParams,'UserScreen'>{};
const config = {
    headers:{'x-api-key':'7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo'}
  };

export const UserScreen = ({ navigation, route }: Props) => {

    const {user,userId} = useContext(AuthContext)
    const[visible, setVisible] = useState(false)
    const {information,isLoading } = useDataUser()
    const {logOut} = useContext(AuthContext);


 
  const close = ()=>{
        navigation.navigate('CharacterList')
        setVisible(false)
    }
    

   
const { opacity, fadeIn,} = useAnimation();
  


        return (

    <ImageBackground 
    source={require('../../assest/userfondo.jpg')}
    resizeMode='cover'
    style={styles.background}>
        <View style={styles.container}>
            <View style={styles.back}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Icon name="arrow-back-outline" size={30} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.edit}>
                <ModalEdit visible={visible} onPress={()=>setVisible(false)} onPress2={()=>close()}/>
                <TouchableOpacity onPress={()=>setVisible(true)}>
                    <Icon name="pencil-outline" size={30} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',width:'75%',backgroundColor:'rgba(0,0,0,0.4)',height:'45%'}}>
            
                <View style={{marginVertical:'5%',flex:1, justifyContent:'space-between'}}>
                    <Text style={{color:'white'}}>Name:</Text>
                    <Text style={styles.textData}>{information.name}</Text>
                    <Text style={{color:'white'}}>Surname:</Text>
                    <Text style={styles.textData}>{information.surname}</Text>
                    <Text style={{color:'white'}}>Mail:</Text>
                    <Text style={styles.textData}>{information.mail}</Text>
                    <Text style={{color:'white'}}>Phone:</Text>
                    <Text style={styles.textData}>{information.phone}</Text>
                </View>
            </View>
            <View style={{marginTop:'8%'}}>
                <TouchableOpacity onPress={logOut} style={{backgroundColor:'black', alignItems:'center'}}>
                    <Icon name="log-out-outline" size={60} color="white"/>
                    <Text style={styles.textLogout}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
  )
}


