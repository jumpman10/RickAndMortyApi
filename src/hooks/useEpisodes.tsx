import { RickAndMortyApi } from "../api/RickAndMortyApi";


export const useEpisodes = async(epi:string[]) => {
    
    const infoArray:string[] = []
    
    await Promise.all(
      epi.map(async e => {
        const resp = await RickAndMortyApi(e)
        infoArray.push(resp.data)
      }),
    )


return {
    infoArray
}

}


