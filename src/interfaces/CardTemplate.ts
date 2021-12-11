import { CardImages } from "./CardImages";
import { Game } from "./Game";
import { Level } from "./Level";
import { Player } from "./Player";
import { PlayerCardProperties } from "./PlayerCardProperties";
import { PlayerStat } from "./PlayerStat";
import { PlayerStatsV2 } from "./PlayerStatsV2";
import { Team } from "./Team";
import { Treatment } from "./Treatment";

export interface CardTemplate {
    id: number
    uuid: string
    title: string
    cardType: string
    categoryId: number
    treatmentId: number
    properties: PlayerCardProperties
    limitedEdition: boolean
    inCirculation: number
    rarity: string
    images: CardImages
    game: Game
    team: Team
    player: Player
    playerStats: PlayerStat[]
    playerStatsV2: PlayerStatsV2
    playerRole: {
        name: string
        gameSideIcon: string
    }
    level: Level
    treatment: Treatment
    ethTransactions: []
}