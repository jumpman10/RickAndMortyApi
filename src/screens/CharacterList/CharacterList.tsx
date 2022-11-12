import React, { useContext, useEffect } from 'react'
import { TouchableOpacity, Animated, FlatList, Image, ImageBackground, Text, View } from 'react-native'
import { FlatListCharacter } from '../../components/FlatListCharacter';
import { styles } from './stylesCharacterList';
import { useRMpagination } from '../../hooks/useRMpagination';
import { AuthContext } from '../../context/AuthContext/authContext';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useAnimation } from '../../hooks/useAnimation';



interface Props extends StackScreenProps<RootStackParams,'CharacterList'>{};


const CharacterList = ({ navigation, route }: Props) => {
    const {isLoading, simpleCharacterList,previousCharacters,
        nextCharacters,currentPage,lastCharacters,firstCharacters}=useRMpagination()
    const {  opacity, fadeIn} = useAnimation();
    
    useEffect(() => {
        fadeIn()
      }, [])
    

    return (
        
    <ImageBackground
        source={require('../../assest/fondo3.jpg')}
        style={styles.image}
        resizeMode="cover">


            {
              isLoading
              ?
              ( <View style = {styles.loadingIndicator}>
                 <Animated.Image source={require('../../assest/loading-RyM.png')} resizeMode='cover' 
                    style={{ 
                    ...styles.img,                                        
                    opacity
                    }} />
              </View> )
             :
             <View style={{marginBottom:50}} >
             <FlatList 
             data={ simpleCharacterList }
             keyExtractor={ (character) => character.id.toString() }
             showsVerticalScrollIndicator={ false }
             numColumns={ 2 }
           
             renderItem={ ({ item }) => ( <FlatListCharacter characters={item}/>) }
             ListHeaderComponent={             
             <View style={styles.header}>
             <View style={styles.logoPosition}>
                 <Image source={require('../../assest/Rick-and-Morty-removebg-preview.png')}
                         style={styles.logo}/>
             </View>
             </View>}            

             ListFooterComponent={(  
                
             currentPage ==='https://rickandmortyapi.com/api/character' ||
             currentPage ==='https://rickandmortyapi.com/api/character?page=1' ? ( 
             <View style={styles.paginator}>
             <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
             <TouchableOpacity activeOpacity={0.4} onPress={nextCharacters}style={styles.paginatiobtn} >
                 <Icon name="chevron-forward-outline" size={50} color="black" />
             </TouchableOpacity>
             </View>
             <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <TouchableOpacity activeOpacity={0.8} onPress={lastCharacters} style={styles.paginatiobtn} >
                             <Icon name="play-forward-outline" size={50} color="black"/>
                         </TouchableOpacity>
            </View>
         </View>) 
             : (  <View style={styles.paginator}>
                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                     <TouchableOpacity activeOpacity={0.8} onPress={previousCharacters} style={styles.paginatiobtn} >
                         <Icon name="chevron-back-outline" size={50} color="black" />
                     </TouchableOpacity>
                     </View>
                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                     <TouchableOpacity activeOpacity={0.8} onPress={nextCharacters} style={styles.paginatiobtn} >
                         <Icon name="chevron-forward-outline" size={50} color="black"/>
                     </TouchableOpacity>
                     </View>
                 </View> ) &&
                 currentPage ==='https://rickandmortyapi.com/api/character?page=42'  ? ( 
                 <View style={styles.paginator}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <TouchableOpacity activeOpacity={0.8} onPress={firstCharacters} style={styles.paginatiobtn} >
                             <Icon name="play-back-outline" size={50} color="black"/>
                         </TouchableOpacity>
                         </View>
                 <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                 <TouchableOpacity activeOpacity={0.8} onPress={previousCharacters}style={styles.paginatiobtn}  >
                     <Icon name="chevron-back-outline" size={50} color="black"/>
                 </TouchableOpacity>
                 </View>
             </View>) 
                 : (  <View style={styles.paginator}>
                         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <TouchableOpacity activeOpacity={0.8} onPress={firstCharacters} style={styles.paginatiobtn} >
                             <Icon name="play-back-outline" size={50} color="black"/>
                         </TouchableOpacity>
                         </View>
                         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <TouchableOpacity activeOpacity={0.8} onPress={previousCharacters} style={styles.paginatiobtn} >
                             <Icon name="chevron-back-outline" size={50} color="black"/>
                         </TouchableOpacity>
                         </View>
                         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <TouchableOpacity activeOpacity={0.8} onPress={nextCharacters} style={styles.paginatiobtn} >
                             <Icon name="chevron-forward-outline" size={50} color="black"/>
                         </TouchableOpacity>
                         </View>
                         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                         <TouchableOpacity activeOpacity={0.8} onPress={lastCharacters} style={styles.paginatiobtn} >
                             <Icon name="play-forward-outline" size={50} color="black"/>
                         </TouchableOpacity>
                         </View>
                     </View> )
                 
             )}
         />

            </View>       

}

                    <View style={styles.footer}>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('UserScreen')}
                            style={styles.footerItem}>
                                <Icon name="person-outline" size={25} color="black" />
                                <Text style={{textAlign:'center',color:'black',fontFamily:'get_schwifty'}} >User</Text>
                            </TouchableOpacity>
                        </View>
                        
                     </View>


    </ImageBackground>
        
    )
}


export default CharacterList




