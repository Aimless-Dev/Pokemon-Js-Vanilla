export const ItemPokemon = async ( name, data, render ) => {
    const div               = document.createElement('div')
    div.className           = 'card'
    const pokeImg           = await data
    const { types }         = await data
    div.title               = name

    const p                 = document.createElement('p')
    p.textContent           = name

    const typeOne           = document.createElement('p')
    typeOne.textContent     = 'None'
    typeOne.className       = "typeOne"

    const typeTwo           = document.createElement('p')
    typeTwo.className       = "typeTwo"
    typeTwo.textContent     = 'None'

    types.map( (type) => {
        if (type.slot == 1){
            typeOne.textContent = type.type.name
            
        }

        if (type.slot == 2){
            typeTwo.textContent = type.type.name
        }
    })

    const type              = document.createElement('div')
    type.appendChild(typeOne)
    type.appendChild(typeTwo)

    const img               = document.createElement('img') 
    img.src                 = pokeImg.front

    //* Events for animation

    div.addEventListener('mouseover', (e) => {
        img.src =  pokeImg.back
    })
    div.addEventListener('mouseleave', (e) => {
        img.src =  pokeImg.front
    })

    div.appendChild(p)
    div.appendChild(img)
    div.appendChild(type)
    render.appendChild(div)

    return render
}