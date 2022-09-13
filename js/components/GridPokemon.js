import { GetPokemons } from "../helpers/getPokemons.js"
import { ItemPokemon } from "./ItemPokemon.js"

export const GridPokemon = async ( render ) => {
    const { pokemons } = await GetPokemons()
    const div       = document.createElement('div')
    div.className   = 'card-grid'

    pokemons.map( async (pokemon) => (

        div.appendChild( await ItemPokemon(pokemon.name, pokemon.data, div))
    ))

    render.appendChild(div)
    
}