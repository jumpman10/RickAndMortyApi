import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { FlatList, Image, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigator'
import { styles } from './stylesCharacterScreen';
import { useCharacter } from '../../hooks/useCharacter';
import { useEpisodes } from '../../hooks/useEpisodes';
import  Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<RootStackParams,'CharacterScreen'>{};



export const CharacterScreen = ({ navigation, route }: Props) => {
    
    const { simpleCharacter} = route.params;
    const {image,name,episode,id} = simpleCharacter
    const [episodes,setEpisodes] =useState<any>([])
    const {character}=useCharacter(id)
    const[visible, setVisible] = useState(false)

    if(episode!==undefined)  
    useEffect(() => {
      (async () => {
          const data = await useEpisodes(episode);
          setEpisodes(data);
      })()
      }, []);

    return ( 
    
    <ImageBackground 
    source={require('../../assest/rick_and_morty1.jpg')}
    style={styles.imagebg}
    resizeMode='cover'>
      <ScrollView>
        <View style={styles.container}> 
              <View style={styles.back}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Icon name="arrow-back-outline" size={30} color="white"/>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:30, alignItems:'center'}}>
                <View style={styles.seperator}>
                  <Text style={styles.name}>
                      {name}
                  </Text>
                </View>
                <View style={styles.imagePosition}>
                  <Image
                    source={{uri:image}}
                    style={styles.image}
                    resizeMode="contain"/>
                </View> 
                <View style={{width:'90%',marginTop:5}}>
                  <Text style={styles.text}>Species :  { character.species}</Text>
                  <Text style={styles.text}>Gender :  {character.gender}</Text>
                  <Text style={styles.text}>Status :  {character.status}</Text>
                  <Text style={styles.text}>Type : {character.type===''?'no have type' : character.type}</Text>
                  <Text style={styles.text}>Origin :  {character.origin?.name}</Text>    
                  <Text style={styles.text}>Location :  {character.location?.name}</Text>
                </View>
                <TouchableOpacity onPress={()=>setVisible(true)} 
                style={styles.episodes} >
                  <Text style={{...styles.text, backgroundColor:'rgba(0,0,0,0)'}}>Episodes</Text>
                  <Icon name="chevron-up-circle-outline" size={30} color="white"/>
                </TouchableOpacity>
              </View>
        </View> 
      </ScrollView>
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            >
          <View style={styles.containerModal}>
            <View style={styles.card}>
                <TouchableOpacity onPress={()=>setVisible(false)} style={styles.closePosition}>
                  <Icon name="close-circle-outline" size={50} color="black"/>
                </TouchableOpacity>
                <View  >
                  <FlatList 
                  style={{height:'85%',marginTop:20}}
                      data={ episodes.infoArray }
                      keyExtractor={ (character) => character.id.toString() }
                      showsVerticalScrollIndicator={ false }
                      renderItem={ ({ item }) => (  
                      <View style={{alignItems:'center'}}>
                        <View style={{borderWidth:1,marginTop:3, width:'90%'}}>
                          <Text style={styles.textModal}><Text style={{color:'rgb(139, 207, 33)'}}>Name :
                          </Text> {item.name}</Text>
                          <Text style={styles.textModal}><Text style={{color:'rgb(139, 207, 33)'}}>Air date :
                          </Text> {item.air_date}</Text>
                          <Text style={styles.textModal}><Text style={{color:'rgb(139, 207, 33)'}}>Episode :
                          </Text> {item.episode}</Text>
                        </View>
                      </View>)}
                  />
                </View>
            </View> 
          </View>
        </Modal>
    </ImageBackground>
   
  )
}



