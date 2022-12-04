const pokeId = new URLSearchParams(window.location.search).get('id');
const urlInfos = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
const pokeImg = (document.querySelector(
  '#imgId'
).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`);

const pokeList = document.querySelector('#pokemonDetails');

async function getPokemon() {
  const response = await fetch(urlInfos);
  const data = await response.json();

  const nome = data.name;
  const exp = data.base_experience;
  const altura = data.height;
  const peso = data.weight;
  const habilidades = data.abilities
    .map(function (e) {
      return e.ability.name;
    })
    .join(', ');

  console.log(nome);
  pokeList.innerHTML = pokemonDetailsList(nome, exp, altura, peso, habilidades);
  console.log(nome);
}

function pokemonDetailsList(nome, exp, altura, peso, habilidades) {
  return `
  <li class='detailsList'>
    <span>Nome: ${nome}</span>
    </li>
    <li class='detailsList'>
    <span>Exp: ${exp}</span>
    </li>
    <li class='detailsList'>
    <span>Altura: ${altura}</span>
    </li>
    <li class='detailsList'>
    <span>Peso: ${peso}</span>
    </li>
    <li class='detailsList'>
    <span>Habilidades: ${habilidades}</span>
    </li>
  `;
}

getPokemon();