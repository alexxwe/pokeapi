<script lang="ts">
    import { pokemonsContext, type CachedPokemonDto } from '$lib/context/pokemons'

    // Context
    let _pokemons: Array<CachedPokemonDto> = []
    pokemonsContext.subscribe(pokemons => (_pokemons = pokemons))

    // Search input text
    let input = ''
</script>

<header class="bg-zinc-700 p-2">
    <div class="flex items-center">
        <a href="../" rel="icon"><i class="bi bi-record-circle mr-4 text-4xl" /></a>
        <input type="text" placeholder=" Pokemon Search" class="rounded border px-1 text-black" bind:value={input} />
    </div>
    {#if input.length > 0}
        {#each _pokemons.filter(x => x.name.includes(input)).slice(0, 12) as pokemon}
            <div>
                <a href="/pokemon/{pokemon.url.split('pokemon')[1].replaceAll('/', '')}">
                    #{pokemon.url.split('pokemon')[1].replaceAll('/', '')} - {pokemon.name}
                </a>
            </div>
        {/each}
    {/if}
    <!-- last 10271 -->
</header>
<!-- <button on:click={handleSearch}>Search</button> -->
