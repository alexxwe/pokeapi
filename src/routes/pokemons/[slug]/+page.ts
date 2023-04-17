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
        for (const result of data.results) {
            const pokemonResponse = await fetch(result.url)
            const pokemonData = await pokemonResponse.json()

            pokemons.push({
                forms: pokemonData.forms,
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
