// ---------------------------------------------------------------------------
// Core types for the Set card game.
// Each card has exactly 4 attributes; each attribute has exactly 3 values.
// There are 3^4 = 81 unique cards in a deck.
// ---------------------------------------------------------------------------

export type Count = 1 | 2 | 3
export type Color = 'red' | 'green' | 'purple'
export type Shape = 'oval' | 'squiggle' | 'diamond'
export type Fill = 'solid' | 'striped' | 'empty'

export interface Card {
  count: Count
  color: Color
  shape: Shape
  fill: Fill
}

// ---------------------------------------------------------------------------
// TODO (Issue #4): Define the full shape of your game state here once you
// know what the store needs. For now it's a placeholder.
// Think about:
//   - What cards are in the deck (not yet dealt)?
//   - What cards are on the board?
//   - Which board indices are currently selected?
//   - How many sets has the player found?
//   - Is the game over?
// ---------------------------------------------------------------------------
export interface GameState {
  deck: Card[]
  board: Card[]
  selected: number[]
  setsFound: number
  isGameOver: boolean
}
