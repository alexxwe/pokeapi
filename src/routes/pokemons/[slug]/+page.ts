import type { PokemonDto } from '$lib/types/pokemon.dto.js'
import type { PokemonListDto } from '$lib/types/pokemonList.dto.js'
import { generations } from '$lib/utils/gens'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }): Promise<{ pokemons: Array<PokemonDto> }> {
    try {
        const { offset, limit } = generations[Number(params.slug) - 1]
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        const data: PokemonListDto = await response.json()

        const promises: Array<Promise<Response>> = []
        for (const result of data.results) {
            promises.push(fetch(result.url))
        }

        const responses = await Promise.all(promises)
        const datas: Array<PokemonDto> = await Promise.all(responses.map(res => res.json()))

        return {
            pokemons: datas.map(data => ({
                forms: data.forms,
                sprites: data.sprites,
                id: data.id,
                types: data.types,
                moves: data.moves,
            })),
        }
    } catch (e: unknown) {
        return {
            pokemons: [],
        }
    }
}
