export interface PokemonDto {
    name: string
    sprites: {
        front_default: string
        other: {
            'official-artwork': {
                front_default: string
            }
        }
        versions: {
            'generation-v': {
                'black-white': {
                    animated: {
                        front_default: string
                    }
                }
            }
        }
    }
    id: number
    types: Array<{
        type: {
            name: string
        }
    }>
    moves: Array<{
        move: {
            name: string
        }
    }>

    stats: Array<{
        base_stat: number
        effort: number //0=black 1=red 2=green
        stat: {
            name: string
            url: string
        }
    }>
}
