const input = document.getElementById("pokemon-name");
title = document.getElementById("pokemon-title");
img = document.getElementById("pokemon-img");


document.getElementById("btn").addEventListener("click", getPokemon);

function getPokemon() {

    var api_url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", api_url, true);

    xhr.onload = function() {

        if (xhr.status === 200) {

            var pokemon = JSON.parse(xhr.responseText);
            console.log(pokemon);

            img.setAttribute("src", pokemon.sprites.front_default);
            title.textContent = pokemon.name;


            input.value = "";
        }
    }
    xhr.send();
}