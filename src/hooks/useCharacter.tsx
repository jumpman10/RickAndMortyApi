import { useEffect, useState } from "react"
import { RickAndMortyApi } from "../api/RickAndMortyApi";
import { Result } from '../interfaces/characterInterface';

export const useCharacter = (id:number) => {

    const [isloading, setIsLoading] = useState(true);
    const [character, setCharacter] = useState<Result>({} as Result)


    const loadCharacter = async()=> {
        setIsLoading(false);
        const resp = await RickAndMortyApi.get<Result>(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(resp.data)
    }

    useEffect(() => {
        loadCharacter()
    }, [])

return{
    isloading,
    character,
}

}




