import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import CharacterList from '../screens/CharacterList/CharacterList';
import { CharacterScreen } from '../screens/CharacterScreen/CharacterScreen';
import { Result} from '../interfaces/characterInterface';
import { AuthContext } from '../context/AuthContext/authContext';
import { LoadingScreen } from '../screens/LoadingScreen/LoadingScreen';
import { UserScreen } from '../screens/UserScreen/UserScreen';



export type RootStackParams = {
 Login:undefined,
 CharacterList:undefined,
 CharacterScreen:{simpleCharacter : Result},
 UserScreen:undefined,
}
const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator= () => {


  const {status} = useContext(AuthContext)

  if(status==='checking') return <LoadingScreen/>
  
  
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: 'rgb(5, 4, 1)',
        flex:1,
      }
    }}>

      {
        (status !== 'authenticated') ?
        (
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        ) : (
        <>
        <Stack.Screen name="CharacterList" component={CharacterList} options={{headerShown:false}}/>
        <Stack.Screen name="CharacterScreen" component={CharacterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="UserScreen" component={UserScreen} options={{headerShown:false}}/>
        </>
        )
      } 
      

    </Stack.Navigator>
  );
}