import { writable, type Writable } from 'svelte/store'

export type CachedPokemonDto = {
    name: string
    url: string
}

export const pokemonsContext: Writable<Array<CachedPokemonDto>> = writable([])
