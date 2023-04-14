export interface PokemonDto {
    forms: Array<{
        name: string
    }>
    sprites: {
        front_default: string
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