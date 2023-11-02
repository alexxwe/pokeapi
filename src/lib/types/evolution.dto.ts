export interface EvolutionDto {
    chain: {
        evolves_to: {
            evolution_details: {
                gender: null | number
                held_item: null
                item: null
                known_move: null
                known_move_type: null
                location: null
                min_affection: null
                min_beauty: null
                min_happiness: null
                min_level: number //
                needs_overworld_rain: boolean
                party_species: null
                party_type: null
                relative_physical_stats: null
                time_of_day: string
                trade_species: null
                trigger: {
                    name: string //
                    url: string //
                }
                turn_upside_down: boolean
            }[]
            evolves_to: {
                evolution_details: {
                    gender: null | number
                    held_item: null //
                    item: null //
                    //known_move: null
                    //known_move_type: null
                    //location: null
                    min_affection: null
                    min_beauty: null
                    min_happiness: null
                    min_level: number //
                    //needs_overworld_rain: boolean
                    //party_species: null
                    //party_type: null
                    //relative_physical_stats: null
                    time_of_day: string
                    //trade_species: null
                    trigger: {
                        name: string //
                        url: string //1, ..., 13
                    }
                    turn_upside_down: boolean
                }[]
                //evolves_to: never[]
                //is_baby: boolean
                species: {
                    name: string
                    url: string
                }
            }[]
            //is_baby: boolean
            species: {
                name: string
                url: string
            }
        }[]
        //is_baby: boolean
        species: {
            name: string //
            url: string //
        }
    }
    id: number
}
