const htmlElement = document.getElementById('root')
function loadPokemon(pokemonId){
    pokeApi.getPokemon(pokemonId)
        .then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>`
            <body class="${pokemon.type}">
                <div id="contentContainer">
                    <nav class="topbar">
                        <button id="homeButton" type="button" onclick = homeButtonClicked()>🔙
                            <!--<img src="assets/src/button/voltar.png" width="20px" alt="botão voltar para página">-->
                        </button>
                        <button id="likeButton">❤️
                            <!--<img src="assets/src/button/like.png" width="20px" alt="botão de curtir">-->
                        </button>
                    </nav>
                    <div id="infoContainer" class="infoContainer">
                        <div id="titleContainer">
                            <div id="title" class="title">${pokemon.name}</div>
                            <div id="order">#0${pokemon.number}</div>
                            <ul id="typeList">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ul>
                            <div id="pokeimg">
                                <img src="${pokemon.photo}" alt="${pokemon.name}">
                            </div>
                        </div>
                    </div>
                   <nav class="info">
                                    <div class="about">
                                        <table>
                                            <thead>
                                            
                                                <th>about</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>species</td>
                                                    <td>${pokemon.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>height</td>
                                                    <td>${pokemon.height}</td>
                                                </tr>
                                                <tr>
                                                    <td>weight</td>
                                                    <td>${pokemon.weight}</td>
                                                </tr>
                                            </tbody>
                                            <span>
                                                <table>
                                                    <thead>
                                                        <th>breeding</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>gender</td>
                                                            <td>male(Genérico)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>egg groups</td>
                                                            <td>monster(Genérico)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>egg cycle</td>
                                                            <td>grass(Genérico)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </span>
                                        </table>
                                    </div>
                                </nav>
                            </div>                   
            </body>`).join('')

            if(htmlElement != null){
                //console.log('entrou')
                htmlElement.innerHTML += newHtml
            }
        })   
}

function homeButtonClicked() {
    window.location.href = '/index.html'
}

function main() {
    let params = new URLSearchParams(window.location.search).toString();
    loadPokemon((pokemon = params.replace(/\D/g, '')))
}
main()