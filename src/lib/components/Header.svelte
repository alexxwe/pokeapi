<script lang="ts">
    import { pokemonsContext, type CachedPokemonDto } from '$lib/context/pokemons'

    // Context
    let _pokemons: Array<CachedPokemonDto> = []
    pokemonsContext.subscribe(pokemons => (_pokemons = pokemons))

    // Search input text
    let input = ''
</script>

<header class="bg-zinc-700">
    <input type="text" placeholder=" Pokemon Search" class="rounded border px-1 text-black" bind:value={input} />
    {#each _pokemons.filter(x => x.name.includes(input)).slice(0, 12) as pokemon}
        <div>
            <a href="/pokemon/{pokemon.url.split('pokemon')[1].replaceAll('/', '')}">
                #{pokemon.url.split('pokemon')[1].replaceAll('/', '')} - {pokemon.name}
            </a>
        </div>
    {/each}
</header>
<!-- <button on:click={handleSearch}>Search</button> -->
