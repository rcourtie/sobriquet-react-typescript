export type GameState = "LOBBY" | "CARD_SELECTION" | "ROUND_LOBBY";
export type Team = "RED" | "BLUE";

export interface Card {
  id: string;
  name: string;
  category: string;
  description: string;
  points: number;
}

export interface Game {
  id: String;
  gameState: GameState;
  cardPool: Card[];
  deck: Card[];
  players: Player[];
}

export interface Player {
  id: string;
  team: Team;
  name: string;
  cardPool?: Card[];
}

export type Action =
  | { type: "ADD_PLAYER"; payload: { player: Player } }
  | { type: "SWITCH_TEAM"; payload: { playerId: string } }
  | { type: "START_GAME" }
  | {
      type: "PLAYER_SELECT_CARDS";
      payload: { playerId: string; cards: Card[] };
    };
