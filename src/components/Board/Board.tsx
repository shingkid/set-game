import { useGameStore } from '../../game/store'
import { Card } from '../Card/Card'

// ---------------------------------------------------------------------------
// TODO (Issue #3): Render the cards currently on the board.
//
// Read from the store:
//   const board = useGameStore(state => state.board)
//   const selected = useGameStore(state => state.selected)
//   const selectCard = useGameStore(state => state.selectCard)
//   const dealMore = useGameStore(state => state.dealMore)
//
// Layout:
//   - A responsive grid (CSS grid works well; aim for 3 columns on mobile,
//     4 on wider screens)
//   - Each cell renders a <Card> with its selected state and onClick
//   - A "Deal 3 more" button, visible only when the deck is non-empty
//     and (optionally) no Sets exist on the board
//
// You'll need findAllSets from isSet.ts to know when to show the button.
// ---------------------------------------------------------------------------
export function Board() {
  void useGameStore
  void Card
  // TODO
  return null
}
