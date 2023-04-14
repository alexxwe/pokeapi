import type { PokemonDto } from '../lib/types/pokemon.dto.js'
import type { PokemonListDto } from '../lib/types/pokemonList.dto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }): Promise<{ pokemons: Array<PokemonDto> }> {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        const data: PokemonListDto = await response.json()

        const pokemons: Array<PokemonDto> = []
        //----------------------------
        //----------------------------
        

        return {
            pokemons,
        }
    } catch (e: unknown) {
        return {
            pokemons: [],
        }
    }
}