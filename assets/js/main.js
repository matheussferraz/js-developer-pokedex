const loadMoreButton = document.getElementById('loadMoreButton')
const homeButton = document.getElementById('homeButton')
const likeButton = document.getElementById('likeButton')
const pokemonList = document.getElementById('pokemonList')
const limit = 5
let offset = 0
const maxRecords = 15

function loadPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>`
            <li id="pokemonItem${pokemon.number}" class="pokemon ${pokemon.type} pokemonClick" name="${pokemon.name}" onclick=capturaPokemonItem(this)>
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>         
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
            </li>`
        ).join('')//escrita otimizada com arrow function
        if(pokemonList != null){
            pokemonList.innerHTML += newHtml
        }
    })
}

function capturaPokemonItem(pokemon) {
    if(pokemon != null) {//clicou em algum pokemon
        pokemonSelected = pokemon.querySelector('.number').textContent.replace('#', '')
        document.location.href = `/pokeDetail.html?id=${pokemonSelected}`
    }
}

if(document.getElementById("loadMoreButton") != null){
    loadMoreButton.addEventListener('click', () => {
        offset += limit
        const qtdRecordsNextPage = offset + limit
    
        if (qtdRecordsNextPage >= maxRecords) {
            const newLimit = maxRecords - offset
            loadPokemons(offset, newLimit)
    
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        } else {
            loadPokemons(offset, limit)
        }
    })
}

function main(){
    loadPokemons(offset, limit)
}
main()