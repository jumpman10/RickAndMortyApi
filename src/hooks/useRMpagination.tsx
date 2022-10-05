import { useEffect, useState } from "react";
import { RickAndMortyApi } from '../api/RickAndMortyApi';
import React, {useRef} from 'react';
import { CharacterPaginatedResponse, SimpleCharacter, Result } from '../interfaces/characterInterface';


export const useRMpagination = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [simpleCharacterList, setsimpleCharacterList] = useState<Result[]>([])
    const page = useRef('https://rickandmortyapi.com/api/character')
    const currentPage =page.current

    const currentCharacters =async()=>{
        try{setIsLoading(true);
        const resp = await RickAndMortyApi.get <CharacterPaginatedResponse> (page.current);
        mapCharacterList(resp.data.results)
    }catch(error){
        page.current='https://rickandmortyapi.com/api/character'
    }
        
    }

    const nextCharacters =async()=>{
                setIsLoading(true);
                const resp = await RickAndMortyApi.get <CharacterPaginatedResponse> (page.current);
                page.current=resp.data.info.next
                mapCharacterList(resp.data.results)
        }
    const previousCharacters = async()=>{
        
        setIsLoading(true);
        const resp = await RickAndMortyApi.get <CharacterPaginatedResponse> (page.current);
        page.current=resp.data.info.prev
        mapCharacterList(resp.data.results)  
    }
    const lastCharacters =async()=>{
        setIsLoading(true);
        const resp = await RickAndMortyApi.get <CharacterPaginatedResponse>(page.current);
        page.current='https://rickandmortyapi.com/api/character?page=42'
        mapCharacterList(resp.data.results)
}
    const firstCharacters =async()=>{
        setIsLoading(true);
        const resp = await RickAndMortyApi.get <CharacterPaginatedResponse>(page.current);
        page.current='https://rickandmortyapi.com/api/character?page=1'
        mapCharacterList(resp.data.results)
    }
    

const mapCharacterList = (characterList : Result[] ) =>{
    const newCharacterList: Result[] = characterList.map(({name,image,gender,id,status,species,episode,type}) => {       
        return{name,image,gender,id,status,species,episode,type}
        })
        setsimpleCharacterList(newCharacterList);
        setIsLoading(false);
    }

    useEffect(() => {
            currentCharacters();
    }, [page.current])
    



    
    return{
        isLoading,
        simpleCharacterList,
        nextCharacters,
        previousCharacters,
        currentPage,
        firstCharacters,
        lastCharacters 

    }
}
