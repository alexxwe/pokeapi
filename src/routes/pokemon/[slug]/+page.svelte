<script lang="ts">
    import { goto } from '$app/navigation'
    import type { PokemonDto } from '$lib/types/pokemon.dto'
    import { bgColors, borderColors, typesColors } from '$lib/utils/colorType'

    /** @type {import('./$types').PageData} */
    export let data: {
        pokemon: PokemonDto
    }

    const colors: { [key: number]: string } = {
        0: '',
        1: 'border-yellow-500',
        2: 'border-orange-600',
        3: 'border-red-600',
    }

    let showText = false
    let dots = '...'

    function handleClick() {
        showText = true
        setInterval(function () {
            if (dots.length > 3) {
                dots = ''
            }
            var textOverlay = document.getElementById('text-overlay')
            if (textOverlay) {
                textOverlay.innerText = dots
            }
            dots += '.'
        }, 500)
    }

    let animation = 'animate__animated animate__fadeInDown'

    async function handleArrowClick(isNext: boolean) {
        let newId
        if (isNext) {
            animation = 'animate__animated animate__fadeInRight'
            newId = data.pokemon.id + 1
        } else {
            animation = 'animate__animated animate__fadeInLeft'
            newId = data.pokemon.id - 1
        }

        data.pokemon.id = newId

        const newUrl = `/pokemon/${newId}`

        animation = ''

        try {
            await goto(newUrl)
        } catch (error) {
            console.error('Error redirecting to the new URL:', error)
        }

        setTimeout(() => {
            if (isNext) {
                animation = 'animate__animated animate__fadeInRight'
            } else {
                animation = 'animate__animated animate__fadeInLeft'
            }
        }, 10)
    }
</script>

<div>
    {#if showText}
        <div id="text-overlay" class="text-overlay absolute left-4 m-8 text-2xl font-bold text-white">
            {dots}
        </div>
    {/if}
</div>
<div class="my-8 text-center">
    <a href="/generations/1" class="m-2 rounded border-2 border-red-600 bg-red-600 p-2 shadow-lg hover:shadow-red-600" on:click={handleClick}> POKEDEX </a>
</div>
<div class="mx-auto w-80">
    {#if data.pokemon}
        <div class="mx-auto h-full max-w-full" />
        <div
            class="flex flex-col items-center rounded-lg {bgColors[data.pokemon.types[0].type.name]} {borderColors[
                data.pokemon.types[0].type.name
            ]} {animation} p-4 text-center"
        >
            <h2 class="mb-2 text-lg font-bold">{data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1)} #{data.pokemon.id}</h2>
            {#each data.pokemon.types as types}
                <span class="mb-0.5 rounded-full border px-2 shadow {typesColors[types.type.name]}">
                    {types.type.name.toUpperCase()}
                </span>
            {/each}
            <img src={data.pokemon.sprites.other['official-artwork'].front_default} alt={data.pokemon.name} />
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
</div>
<div class="mx-auto max-w-md">
    <div class="flex flex-row items-center justify-center">
        <button
            aria-label="Previous"
            on:click={() => handleArrowClick(false)}
            class="m-4 rounded border-2 border-indigo-600 bg-indigo-600 p-2 px-10 shadow-lg hover:bg-indigo-800 hover:shadow-indigo-600"
        >
            <i class="bi bi-arrow-left" />
        </button>
        <button
            aria-label="Next"
            on:click={() => handleArrowClick(true)}
            class="m-4 rounded border-2 border-indigo-600 bg-indigo-600 p-2 px-10 shadow-lg hover:bg-indigo-800 hover:shadow-indigo-600"
        >
            <i class="bi bi-arrow-right" />
        </button>
    </div>
</div>
