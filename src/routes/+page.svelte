<script lang="ts">
    import { bgColors, borderColors, typesColors } from '$lib/utils/colorType'
    import '../app.css'
    import type { PokemonDto } from '../lib/types/pokemon.dto'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemons: Array<PokemonDto>
    }

</script>

<div class="mx-auto max-w-7xl">
    <h1 class="mb-4 text-center text-3xl font-bold">Pokemon List</h1>
    <ul class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {#each data.pokemons as pokemon}
            <li class="flex flex-col items-center rounded-lg {bgColors[pokemon.types[0].type.name]} {borderColors[pokemon.types[0].type.name]} p-4 text-center">
                <h2 class="mb-2 text-lg font-bold">{pokemon.forms[0].name} #{pokemon.id}</h2>
                {#each pokemon.types as types}
                    <span class="rounded-full border px-2 shadow mb-0.5 {typesColors[types.type.name]}">{types.type.name}</span>
                {/each}
                <img src={pokemon.sprites.front_default} alt={pokemon.forms[0].name} />
                <ul class="grid grid-cols-2 gap-2 text-center">
                    {#each pokemon.moves.slice(0, 4) as moves}
                        <!-- <li class="rounded-lg px-2 py-2 text-black bg-zinc-300">{pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)].move.name}</li> -->
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>

