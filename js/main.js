import { GridPokemon } from "./components/GridPokemon.js";
const render = document.getElementById('root')

window.addEventListener('load', async () => {
    await GridPokemon(render)
})
