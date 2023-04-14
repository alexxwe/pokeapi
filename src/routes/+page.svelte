<script lang="ts">
    import { onMount } from 'svelte';
    
    interface Pokemon{
        name: string
    }


  let pokemonList: Pokemon[] = [];

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
    const data = await response.json()
    pokemonList = data.results
}


onMount(() => {
    fetchPokemon();
  });
</script>

<h1>Pokemon List</h1>
<ul>
  {#each pokemonList as pokemon}
    <li>{pokemon.name}</li>
  {/each}
</ul>
