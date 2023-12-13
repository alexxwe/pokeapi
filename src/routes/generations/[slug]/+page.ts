import type { PokemonDto } from '$lib/types/pokemon.dto.js'
import type { PokemonListDto } from '$lib/types/pokemonList.dto.js'
import { generations } from '$lib/utils/gens'

const ten = 10 

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }): Promise<{ pokemons: Array<PokemonDto> }> {
    try {
        const { offset, limit } = generations[Number(params.slug) - 1]
        const pokemons: Array<PokemonDto> = []
        const numberOfGroups = Math.ceil(limit / ten)

        const groupPromises = Array.from({ length: numberOfGroups }, (_, i) => {
            const groupOffset = offset + i * ten
            const groupLimit = Math.min(ten, limit - i * ten)
            return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${groupOffset}&limit=${groupLimit}`).then(response => response.json())
        })

        const groupResult: PokemonListDto[] = await Promise.all(groupPromises)

        const results = groupResult.flatMap(result => result.results)
        const pokemonPromises = results.map(result => fetch(result.url).then(response => response.json()))

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pokemonData: Array<any> = await Promise.all(pokemonPromises)

        pokemons.push(
            ...pokemonData.map((data, index) => ({
                name: results[index].name,
                sprites: data.sprites,
                id: data.id,
                types: data.types,
                moves: data.moves,
                stats: data.stats,
            })),
        )

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
