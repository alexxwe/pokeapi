<script lang="ts">
    import Card from '$lib/components/Card.svelte'
    import { pokemonsContext, type CachedPokemonDto } from '$lib/context/pokemons'
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { generations } from '$lib/utils/gens'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemons: Array<PokemonDto>
    }

    let isLoading = false

    function handleClick() {
        isLoading = true
        setTimeout(() => {
            isLoading = false
        },3000 )
    }
    
</script>

<div class="mx-auto max-w-7xl">
    <h1 class="mb-4 text-center text-3xl font-bold">Pokemon List</h1>
    <div class="mb-4 flex justify-center">
        {#each generations as generation, index}
            <a href="/generations/{index + 1}" class=" text-black m-2 rounded border-2 border-gray-400 bg-gray-400 px-2 py-1 hover:bg-gray-400/60" on:click={handleClick}
                >{generation.name}</a
            >
        {/each}
    </div>
    <ul class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {#if isLoading}
        <div>Loading...</div>
    {:else}
        {#each data.pokemons as pokemon}
            <Card {pokemon} />
        {/each}
        {/if}
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

<!-- 
<script lang="ts">
    import { goto } from '$app/navigation'
    import Card from '$lib/components/Card.svelte'
    import { pokemonsContext, type CachedPokemonDto } from '$lib/context/pokemons'
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { generations } from '$lib/utils/gens'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemons: Array<PokemonDto>
    }

    let isLoading = false

    async function handleClick(index: number) {
        isLoading = true
        await goto(`/generations/${index + 1}`) // Use the goto function to navigate to the next page
        isLoading = false
    }
</script>

<div class="mx-auto max-w-7xl">
    <h1 class="mb-4 text-center text-3xl font-bold">Pokemon List</h1>
    <div class="mb-4 flex justify-center">
        {#each generations as generation, index}
            <a
                href="/generations/{index + 1}"
                class="m-2 rounded border-2 border-gray-400 bg-gray-400 px-2 py-1 hover:bg-gray-400/20"
                on:click={() => handleClick(index)}>{generation.name}</a
            >
        {/each}
    </div>
    <ul class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {#if isLoading}
            <div>Loading...</div>
        {:else}
            {#each data.pokemons as pokemon}
                <Card {pokemon} />
            {/each}
        {/if}
    </ul>
</div> -->
