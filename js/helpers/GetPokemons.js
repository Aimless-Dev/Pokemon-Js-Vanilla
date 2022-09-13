import { fetchData } from "./fetchData.js"
import { GetImagesPokemons } from "./getImagesPokemons.js"

export const GetPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const { next, previous, results } = await fetchData(url)

    const getImages = async (pokemonName) => {
        const { sprites, types } = await GetImagesPokemons(pokemonName)
        return {
            types,
            front: sprites.front_default,
            back: sprites.back_default
        }
    }

    const pokemons = results.map( (pokemon) => ({
        name: pokemon.name,
        data: getImages(pokemon.name)
    }))

    return {
        next,
        previous,
        pokemons
    }
}

