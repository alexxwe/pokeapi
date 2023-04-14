<script lang="ts">
    import '../app.css'
    import type { PokemonDto } from '../lib/types/pokemon.dto'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemons: Array<PokemonDto>
    }

</script>

<div class="mx-auto max-w-7xl">
    <h1 class="mb-4 text-center text-3xl font-bold">Pokemon List</h1>
    <ul class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {#each data.pokemons as pokemon}
            <li class="rounded-lg bg-gray-400 p-4 text-center">{pokemon.forms[0].name}</li>
            <h2 class="mb-2 text-lg font-bold">{pokemon.forms[0].name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.forms[0].name} />
        {/each}
    </ul>
</div>
