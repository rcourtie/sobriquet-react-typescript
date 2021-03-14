import React, { useReducer } from "react";
import "./styles.css";
import ReactJson from "react-json-view";
import faker from "faker";
import cardPool from "./cards";
import type { Team, Game, Player, Action } from "./types";

// const MAX_PLAYERS = cardPool.length / 4;
const CARDS_PER_PLAYER = 4;
const MAX_PLAYERS_FOR_CARD_SELECTION = Math.floor(cardPool.length / 7);

// helper functions
function getTeamSize(game: Game, team: Team): number {
  return game.players.filter((player) => player.team === team).length;
}

function getPlayersFromTeam(game: Game, team: Team): Player[] {
  return game.players.filter((player) => player.team === team);
}

function areTeamsBalanced(game: Game): boolean {
  const teamBlueSize = getTeamSize(game, "BLUE");
  const teamRedSize = getTeamSize(game, "RED");

  const teamSizeDiff = Math.abs(teamBlueSize - teamRedSize);

  if (teamSizeDiff > 1 || teamBlueSize < 2 || teamRedSize < 2) {
    return false;
  }

  return true;
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

// factories
function createPlayer(id: string, name: string, team: Team): Player {
  return { id, name, team };
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

  return areTeamsBalanced(game);
}

function canSwitchTeam(game: Game): boolean {
  if (game.gameState === "LOBBY") return true;
  return false;
}

// state change functions

function startGame(game: Game): Game {
  const canStart = canStartGame(game);
  if (canStart && game.players.length <= MAX_PLAYERS_FOR_CARD_SELECTION) {
    game.gameState = "CARD_SELECTION";
    return game;
  }
  if (canStart && game.players.length > MAX_PLAYERS_FOR_CARD_SELECTION) {
    game.gameState = "ROUND_LOBBY";
    return game;
  }
  return game;
}

function switchTeam(game: Game, playerId: string): Game {
  const player = game.players.find((p) => p.id === playerId);

  if (!player) {
    return game;
  }

  player.team = player.team === "BLUE" ? "RED" : "BLUE";

  return game;
}

function reducer(game: Game, action: Action): Game {
  switch (action.type) {
    case "ADD_PLAYER": {
      if (!canAddPlayer(game)) return game;

      const newState: Game = copyGame(game);
      newState.players.push(action.payload.player);
      return newState;
    }
    case "START_GAME":
      if (!canStartGame(game)) return game;
      return startGame(copyGame(game));
    case "SWITCH_TEAM":
      if (!canSwitchTeam(game)) return game;
      return switchTeam(copyGame(game), action.payload.playerId);
    default:
      return game;
  }
}

function App() {
  const [game, dispatch] = useReducer(reducer, {
    id: uuidv4(),
    gameState: "LOBBY",
    deck: [],
    players: [],
    cardPool: JSON.parse(JSON.stringify(cardPool))
  });

  const addPlayer = () => {
    const uuid = uuidv4();
    const team =
      getTeamSize(game, "BLUE") > game.players.length / 2 ? "RED" : "BLUE";
    dispatch({
      type: "ADD_PLAYER",
      payload: { player: createPlayer(uuid, faker.name.findName(), team) }
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
        <button disabled={!canStartGame(game)} onClick={startGame}>
          start game
        </button>
      </div>
      <div>Card selection? {MAX_PLAYERS_FOR_CARD_SELECTION}</div>
      <div className="teams">
        <div>
          BLUE TEAM
          <ul>
            {getPlayersFromTeam(game, "BLUE").map((p) => (
              <li>
                {p.name}{" "}
                {game.gameState === "LOBBY" && (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TEAM",
                        payload: { playerId: p.id }
                      });
                    }}
                  >
                    switch
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          RED TEAM
          <ul>
            {getPlayersFromTeam(game, "RED").map((p) => (
              <li>
                {p.name}
                {game.gameState === "LOBBY" && (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TEAM",
                        payload: { playerId: p.id }
                      });
                    }}
                  >
                    switch
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ReactJson src={game} name="game" />
    </div>
  );
}

export default App;
