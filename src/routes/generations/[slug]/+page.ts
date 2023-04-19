import type { PokemonDto } from '$lib/types/pokemon.dto.js'
import type { PokemonListDto } from '$lib/types/pokemonList.dto.js'
import { generations } from '$lib/utils/gens'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }): Promise<{ pokemons: Array<PokemonDto> }> {
    try {
        const { offset, limit } = generations[Number(params.slug)-1];
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data: PokemonListDto = await response.json()

        const pokemons: Array<PokemonDto> = []
        const promises = []
        for (const result of data.results) {
            promises.push(fetch(result.url))
            const pokemonResponse = await fetch(result.url)
            const pokemonData = await pokemonResponse.json()

            pokemons.push({
                name: result.name,
                sprites: pokemonData.sprites,
                id: pokemonData.id,
                types: pokemonData.types,
                moves: pokemonData.moves,
            })
        }

        return {
            pokemons,
        }
    } catch (e: unknown) {
        return {
            pokemons: [],
        }
    }
}
export type pageData = {
    pokemons: Array<PokemonDto>
}

export type PageLoad = {
    fetch: typeof fetch
    params: {
        slug: string
    }
}

//fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}')






