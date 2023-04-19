import { pokemonsContext } from '$lib/context/pokemons.js'
import type { PokemonDto } from '$lib/types/pokemon.dto.js'
import type { PokemonListDto } from '$lib/types/pokemonList.dto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }): Promise<void> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
    const data: PokemonListDto = await response.json()
    pokemonsContext.set(data.results)
}

export type pageData = {
    pokemons: Array<PokemonDto>
}

//fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}')
