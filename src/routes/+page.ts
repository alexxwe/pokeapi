import type { PokemonDto } from '../lib/types/pokemon.dto.js'
import type { PokemonListDto } from '../lib/types/pokemonList.dto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }): Promise<{ pokemons: Array<PokemonDto> }> {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=450&limit=50')
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
