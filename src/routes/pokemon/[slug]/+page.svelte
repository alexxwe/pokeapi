<script lang="ts">
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { bgColors, borderColors, typesColors } from '$lib/utils/colorType'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemon: PokemonDto
    }

</script>

{#if data.pokemon}
    <div class="mx-auto h-full max-w-full">
        {data.pokemon.id}
    </div>
    <div
        class="flex flex-col items-center rounded-lg {bgColors[data.pokemon.types[0].type.name]} {borderColors[
            data.pokemon.types[0].type.name
        ]} animate__animated animate__fadeInDown p-4 text-center"
    >
        <h2 class="mb-2 text-lg font-bold">{data.pokemon.name} #{data.pokemon.id}</h2>
        {#each data.pokemon.types as types}
            <span class="mb-0.5 rounded-full border px-2 shadow {typesColors[types.type.name]}">{types.type.name}</span>
        {/each}
        <img
            src={data.pokemon.sprites.versions['generation-v']['black-white'].animated.front_default ?? data.pokemon.sprites.front_default}
            alt={data.pokemon.name}
        />
        <ul class="grid grid-cols-2 gap-2 text-center">
            {#each data.pokemon.moves.slice(0, 4) as moves}
                <li class="rounded-lg bg-zinc-300 px-2 py-2 text-black">
                    {data.pokemon.moves[Math.floor(Math.random() * data.pokemon.moves.length)].move.name}
                </li>
            {/each}
        </ul>
    </div>
{:else}
    <div>Pokemon not found...</div>
{/if}






<!-- 
*- list structure in 4 columns centered in a container, displaying each pokemon name. reponsive
*- display picture, types, id, whatever data needed in each card. Style the color bg/border based on type
*- group generations being able to collapse them and hide them under banners (ask me before start)
- lunch
- Search system: allow search by pokemon name in a search bar on top`
- POKEMON VIEW -> when you click on each card, go to a new page which displays that UNIQUE pokemon data in the whole page
- POKEMON VIEW -> structure the data inside the new page, analyzing what should you show in it
-finito -->
