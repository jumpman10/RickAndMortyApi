import { useContext, useEffect, useState } from "react";
import React from 'react';
import { CharacterPaginatedResponse, SimpleCharacter, Result } from '../interfaces/characterInterface';
import axios from "axios";
import { AuthContext } from "../context/AuthContext/authContext";

const config = {
    headers:{'x-api-key':'7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo'}
  };
export const useDataUser = () => {

    const {userId} = useContext(AuthContext)
   
    const [isLoading, setIsLoading] = useState(true)
    const[information,setInformation]=useState<any>([])
    
    const info = async() =>{
    try{   
        const resp = await axios.get(`https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod/user/${userId}`,config);
    setInformation(resp.data.userData)
    }
    catch(error){
        console.log(error)
    }
   }

    useEffect(() => {
            info();
    })
    



    
    return{
        isLoading,
        information,

    }
}
