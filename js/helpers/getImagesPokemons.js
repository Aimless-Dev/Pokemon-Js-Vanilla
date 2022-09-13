import { fetchData } from "./fetchData.js"

export const GetImagesPokemons = async ( pokemonName ) => {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`
    const { sprites, id, types } = await fetchData(url)
    return {sprites, types}
}