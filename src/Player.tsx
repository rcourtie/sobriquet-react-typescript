import React, { useReducer } from "react";
import type { Card, Player, GameState } from "./types";

/**
 * The number of cards the player must select. No more no less.
 */
const NUM_CARDS = 5;

type State = { cards: Set<string> };
type AddAction = { type: "ADD_CARD"; payload: { cardId: string } };
type RemoveAction = { type: "REMOVE_CARD"; payload: { cardId: string } };
type Action = AddAction | RemoveAction;

function reducer(state: State, action: Action): State {
  const { cardId } = action.payload;
  switch (action.type) {
    case "ADD_CARD":
      if (!state.cards.has(cardId)) {
        state.cards.add(cardId);
      }
      return { ...state };
    case "REMOVE_CARD":
      if (state.cards.has(cardId)) {
        state.cards.delete(cardId);
      }
      return { ...state };
    default:
      return state;
  }
}

export default function PlayerComponent({
  player,
  onSelectCards,
  onSwitch,
  gameState
}: {
  player: Player;
  onSelectCards: (cards: Card[]) => void;
  onSwitch: () => void;
  gameState: GameState;
}) {
  const [data, dispatch] = useReducer(reducer, { cards: new Set<string>() });
  const updateCards = (cardId: string, checked: boolean) => {
    if (!checked) {
      dispatch({ type: "REMOVE_CARD", payload: { cardId } });
    } else {
      dispatch({ type: "ADD_CARD", payload: { cardId } });
    }
  };

  const canSelect =
    player.cardPool !== undefined && data.cards.size === NUM_CARDS;
  console.log(player.name, `canSelect: ${canSelect}`);

  const handleSelect = () => {
    if (data.cards.size === NUM_CARDS) {
      console.log("can select for ", player);
      const cards = Array.from(data.cards).reduce<Card[]>((acc, cardId) => {
        if (!player.cardPool) return acc;
        const card = player.cardPool.find((c) => cardId);
        if (card === undefined) return acc;
        acc.push(card);
        return acc;
      }, []);
      console.log(cards);
      onSelectCards(cards);
    }
  };
  return (
    <div>
      {player.name}
      {gameState === "LOBBY" && <button onClick={onSwitch}>switch</button>}
      {player.cardPool &&
        player.cardPool.map((card) => {
          return (
            <div key={card.id}>
              <input
                onChange={(event: React.ChangeEvent) => {
                  // @ts-ignore
                  updateCards(card.id, event.target.checked);
                }}
                type="checkbox"
                id={`select-${card.id}`}
              />
              <label htmlFor={`select-${card.id}`}>{card.name}</label>
            </div>
          );
        })}
      {player.cardPool && (
        <button disabled={!canSelect} onClick={handleSelect}>
          Select
        </button>
      )}
    </div>
  );
}
