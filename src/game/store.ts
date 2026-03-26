import { create } from 'zustand'
import type { GameState } from './types'

// ---------------------------------------------------------------------------
// TODO (Issue #4): Define the actions the player can take.
// These will be implemented alongside the board and set-detection logic.
// ---------------------------------------------------------------------------
interface GameActions {
  /** Shuffle, deal 12 cards to the board, reset score. */
  startGame: () => void

  /** Toggle selection of the card at the given board index.
   *  When 3 cards are selected, automatically validate the Set:
   *  - Valid: remove the 3 cards, deal 3 replacements, increment setsFound.
   *  - Invalid: clear the selection (optionally apply a penalty).
   */
  selectCard: (boardIndex: number) => void

  /** Deal 3 more cards onto the board (used when no Set exists). */
  dealMore: () => void
}

// ---------------------------------------------------------------------------
// TODO (Issue #4): Implement each action above.
// Zustand docs: https://docs.pmnd.rs/zustand/getting-started/introduction
//
// Useful pattern:
//   set(state => ({ ...state, someField: newValue }))
//
// Import createDeck, shuffle, deal from './deck'
// Import isSet, findAllSets from './isSet'
// ---------------------------------------------------------------------------
export const useGameStore = create<GameState & GameActions>(() => ({
  deck: [],
  board: [],
  selected: [],
  setsFound: 0,
  isGameOver: false,

  startGame: () => {
    throw new Error('Not implemented')
  },

  selectCard: (_boardIndex: number) => {
    throw new Error('Not implemented')
  },

  dealMore: () => {
    throw new Error('Not implemented')
  },
}))
