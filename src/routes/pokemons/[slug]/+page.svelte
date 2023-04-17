<script lang="ts">
    import Card from '$lib/components/Card.svelte'
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { generations } from '$lib/utils/gens'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemons: Array<PokemonDto>
    }

    let search = ''

    async function handleSearch() {
        if (search === '') return
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        const searchData = await response.json()
        data.pokemons = [
            {
                forms: searchData.forms,
                sprites: searchData.sprites,
                id: searchData.id,
                types: searchData.types,
                moves: searchData.moves,
            },
        ]
    }
</script>

<div class="mx-auto max-w-7xl">
    <h1 class="mb-4 text-center text-3xl font-bold">Pokemon List</h1>
    <div class="mb-4 flex justify-center">
        {#each generations as generation, index}
            <a href="/pokemons/{index + 1}" class="m-2 rounded border-2 border-gray-400 bg-gray-400 px-2 py-1 hover:bg-gray-400/20">{generation.name}</a>
        {/each}
        <input
            type="text"
            placeholder=" Pokemon Search"
            class="rounded border px-1 text-black"
            bind:value={search}
            on:keydown={event => {
                if (event.key === 'Enter') {
                    handleSearch()
                }
            }}
        />
        <!-- <button on:click={handleSearch}>Search</button> -->
    </div>
    <ul class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {#each data.pokemons as pokemon}
            <Card {pokemon} />
        {/each}
    </ul>
</div>

<!-- 
*- list structure in 4 columns centered in a container, displaying each pokemon name. reponsive
*- display picture, types, id, whatever data needed in each card. Style the color bg/border based on type
*- group generations being able to collapse them and hide them under banners (ask me before start)
- lunch
- Search system: allow search by pokemon name in a search bar on top`
- POKEMON VIEW -> when you click on each card, go to a new page which displays that UNIQUE pokemon data in the whole page
- POKEMON VIEW -> structure the data inside the new page, analyzing what should you show in it
-finito -->
