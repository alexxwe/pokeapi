<script lang="ts">
    import { bgColors, borderColors, typesColors } from '$lib/utils/colorType'
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { generations } from '$lib/utils/gens'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemons: Array<PokemonDto>
    }

</script>

<div class="mx-auto max-w-7xl">
    <h1 class="mb-4 text-center text-3xl font-bold">Pokemon List</h1>
    <div class="mb-4 flex justify-center">
        {#each generations as generation, index}
            <a href="/pokemons/{index + 1}" class="m-2 rounded border-2 border-gray-400 bg-gray-400 px-2 py-1 hover:bg-gray-400/20">{generation.name}</a>
        {/each}
    </div>
    <ul class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {#each data.pokemons as pokemon}
            <li class="flex flex-col items-center rounded-lg {bgColors[pokemon.types[0].type.name]} {borderColors[pokemon.types[0].type.name]} p-4 text-center">
                <h2 class="mb-2 text-lg font-bold">{pokemon.forms[0].name} #{pokemon.id}</h2>
                {#each pokemon.types as types}
                    <span class="mb-0.5 rounded-full border px-2 shadow {typesColors[types.type.name]}">{types.type.name}</span>
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

<!-- 
*- list structure in 4 columns centered in a container, displaying each pokemon name. reponsive
*- display picture, types, id, whatever data needed in each card. Style the color bg/border based on type
- group generations being able to collapse them and hide them under banners (ask me before start)
- lunch
- Search system: allow search by pokemon name in a search bar on top`
- POKEMON VIEW -> when you click on each card, go to a new page which displays that UNIQUE pokemon data in the whole page
- POKEMON VIEW -> structure the data inside the new page, analyzing what should you show in it
-finito -->
