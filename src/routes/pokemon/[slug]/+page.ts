import type { PokemonDto } from '$lib/types/pokemon.dto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ params }): Promise<{ pokemon: PokemonDto | null }> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`)
        const data: PokemonDto = await response.json()

        return {
            pokemon: data,
        }
    } catch (e: unknown) {
        return {
            pokemon: null,
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
