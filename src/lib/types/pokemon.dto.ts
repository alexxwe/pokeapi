export interface PokemonDto {
    name: string
    sprites: {
        front_default: string
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
}
