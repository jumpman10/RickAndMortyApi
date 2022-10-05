import axios from "axios";
import React, { createContext, useReducer,useEffect, useState } from "react";
import { LoginResponse, UserData, LoginData } from '../../interfaces/auhtInterface';
import { authReducer, AuthState } from "./authReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';



type AuthContextProps = {
    errorMessaje : string,
    userId: string | null,
    user:UserData | null,
    status: 'checking' | 'authenticated' | 'not-authenticated',
    singIn: (logindata : LoginData) => void;
    logOut: () => void;
    removeError: () => void;
    edit:({name,phone,surname} : UserData) => void;
}

const authInitialState : AuthState = {
    status: 'checking',
    userId:null,
    user:null,
    errorMessaje:''
}

export const AuthContext = createContext( {} as AuthContextProps) ;



const config = {
    headers:{'x-api-key':'7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo'}
  };
const url ='https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod'
const urlPut ='https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod/user'


export const AuthProvider = ({children} : any) => {

    const [state, dispatch] = useReducer(authReducer,authInitialState)

    useEffect(() => {
        checkUserId();
    }, [])
    
    
    const checkUserId = async() =>{
        const userId = await AsyncStorage.getItem('userId');
        if(!userId) return dispatch({type:'notAuthenticated'})
        
        const resp = await axios.get(`${url}/user/${userId}`,config)

        dispatch({
            type: 'singIn',
            payload: {
                userId:resp.data.userId,
                user:resp.data.userData
            }
        })
        
    }
    
    const singIn = async( {mail,password} : LoginData ) => {

        try {
            const resp = await axios.post<LoginResponse>(`${url}/login`,{ mail,password }, config)
            dispatch({
                type: 'singIn',
                payload: {
                    userId:resp.data.userId,
                    user:resp.data.userData
                }
            })

            await AsyncStorage.setItem('userId', resp.data.userId,)



        } catch (error) {
            console.log(error)
            dispatch({
                type:'addError',
                payload:'La contraseña o el mail enviado son incorrectos'
            })
        }
    } ;
    
    const edit = async({name,phone,surname} : UserData)=>{  
        
        const userId = await AsyncStorage.getItem('userId');
        try {
            const resp = await axios.put(`${urlPut}/${userId}`,{name,phone,surname},config)   
        } catch (error) {
            console.log(error)
        }
        
    }
  

    
    const logOut= async() => {
        await AsyncStorage.removeItem('userId');
        dispatch({type:'logOut'})
    } ;
    
    const removeError= () => {
        dispatch({type:'removeError'})
    } ;
    
    return(

        <AuthContext.Provider value = {{
            ...state,
            singIn,
            logOut,
            removeError,
            edit,
        }}>
            
            { children }
        
        </AuthContext.Provider>
    )
}