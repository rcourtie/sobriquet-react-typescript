import React, { useReducer } from "react";
import "./styles.css";
import ReactJson from "react-json-view";

type GameState = "LOBBY" | "CARD_SELECTION";
type Team = "RED" | "BLUE";

interface Game {
  id: String;
  gameState: GameState;
  deck: Card[];
  players: Player[];
}

interface Player {
  id: String;
  team: Team;
}

interface Card {
  id: String;
}

type Action =
  | { type: "ADD_PLAYER"; payload: { player: Player } }
  | { type: "START_GAME" };

// factories
function createPlayer(id: string, team: Team): Player {
  return { id, team };
}

// can do state change "X" functions

function canAddPlayer(game: Game): Boolean {
  if (game.gameState === "LOBBY") {
    return true;
  }

  return false;
}

function canStartGame(game: Game): boolean {
  if (game.gameState !== "LOBBY") return false;

  const teamSizeDiff = Math.abs(
    getTeamSize(game, "BLUE") - getTeamSize(game, "RED")
  );
  if (teamSizeDiff > 1) return false;

  return true;
}

// state change functions

function startGame(game: Game): Game {
  if (canStartGame(game)) {
    game.gameState = "CARD_SELECTION";
  }
  return game;
}

// helper functions
function getTeamSize(game: Game, team: Team): number {
  return game.players.filter((player) => player.team === team).length;
}

function copyGame(game: Game): Game {
  return JSON.parse(JSON.stringify(game));
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function reducer(state: Game, action: Action): Game {
  switch (action.type) {
    case "ADD_PLAYER": {
      const newState: Game = copyGame(state);
      newState.players.push(action.payload.player);
      return newState;
    }
    case "START_GAME":
      return startGame(copyGame(state));
    default:
      return state;
  }
}

function App() {
  const [game, dispatch] = useReducer(reducer, {
    id: uuidv4(),
    gameState: "LOBBY",
    deck: [],
    players: []
  });

  const addPlayer = () => {
    const uuid = uuidv4();
    const team =
      getTeamSize(game, "BLUE") > game.players.length / 2 ? "RED" : "BLUE";
    dispatch({
      type: "ADD_PLAYER",
      payload: { player: createPlayer(uuid, team) }
    });
  };

  const startGame = () => {
    dispatch({ type: "START_GAME" });
  };
  return (
    <div className="App">
      <div className="ButtonGrid">
        <button disabled={!canAddPlayer(game)} onClick={addPlayer}>
          add player
        </button>
        <button onClick={startGame}>start game</button>
      </div>
      <ReactJson src={game} name="game" />
    </div>
  );
}

export default App;
