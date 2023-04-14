<script lang="ts">
    import "../app.css"
    import { onMount } from 'svelte'

    interface Pokemon {
        name: string
    }

    let pokemonList: Pokemon[] = []

    async function fetchPokemon(): Promise<void> {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        const data = await response.json()
        pokemonList = data.results
    }

    onMount((): void => {
        fetchPokemon()
    })
</script>

    <div class="mx-auto max-w-7xl">
        <h1 class="mb-4 text-3xl font-bold text-center">Pokemon List</h1>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          {#each pokemonList as pokemon}
                <li class="rounded-lg bg-gray-400 p-4 text-center">{pokemon.name}</li>
                
            {/each}
        </ul>
    </div>
