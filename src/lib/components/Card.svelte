<script lang="ts">
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { bgColors, borderColors, typesColors } from '$lib/utils/colorType'

    export let pokemon: PokemonDto
    
</script>

<a
href="/pokemon/{pokemon.id}"
    class="flex flex-col items-center rounded-lg {bgColors[pokemon.types[0].type.name]} {borderColors[
        pokemon.types[0].type.name
    ]} animate__animated animate__fadeInDown p-4 text-center"
>
    <h2 class="mb-2 text-lg font-bold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} #{pokemon.id}</h2>
    {#each pokemon.types as types}
        <span class="mb-0.5 rounded-full border px-2 shadow {typesColors[types.type.name]}">{types.type.name}</span>
    {/each}
    <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default ?? pokemon.sprites.front_default ?? pokemon.sprites.other['official-artwork'].front_default}
 
    alt={pokemon.name} />
    <!-- <ul class="grid grid-cols-2 gap-2 text-center">
        {#each pokemon.moves.slice(0, 4) as moves}
            <li class="rounded-lg px-2 py-2 text-black bg-zinc-300">{pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)].move.name}</li>
        {/each}
    </ul> -->
</a>
