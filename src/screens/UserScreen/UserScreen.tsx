import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ModalEdit } from '../../components/ModalEdit';
import { AuthContext } from '../../context/AuthContext/authContext';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styleUserScreen';


interface Props extends StackScreenProps<RootStackParams,'UserScreen'>{};


export const UserScreen = ({ navigation, route }: Props) => {
    const {user,userId} = useContext(AuthContext)
    const[visible, setVisible] = useState(false)
    const {logOut} = useContext(AuthContext);
    const[information,setInformation]=useState([])
    const config = {
        headers:{'x-api-key':'7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo'}
      };
    const info= async()=>{
        const resp = await axios.get(`https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod/user/${userId}`,config)
        setInformation(resp.data)
    }

    const close = ()=>{
        navigation.navigate('CharacterList')
        setVisible(false)
    }
    
    useEffect(() => {
        info()
        }, []);
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
            <View style={{alignItems:'center'}}>
            
                <View style={{marginTop:'5%'}}>
                    <Text style={styles.textData}>{JSON.stringify(information,null,3)}</Text>
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


