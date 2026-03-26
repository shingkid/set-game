import type { Card as CardType } from '../../game/types'
import { Oval } from './shapes/Oval'
import { Squiggle } from './shapes/Squiggle'
import { Diamond } from './shapes/Diamond'

interface CardProps {
  card: CardType
  selected: boolean
  onClick: () => void
}

// ---------------------------------------------------------------------------
// TODO (Issue #2): Render a single Set card.
//
// Layout:
//   <button> wrapper — handles click, selected state (ring/border highlight)
//     <svg> canvas
//       {Array.from({ length: card.count }).map(() => <Shape />)}
//     </svg>
//
// The SVG should stack `card.count` copies of the shape vertically, centred.
// A common approach: fixed viewBox (e.g. "0 0 80 120"), place shapes at
// y = 20, 50, 80 for counts 1, 2, 3 respectively (or calculate dynamically).
//
// Pass card.color and card.fill down to whichever shape component you render.
// Use a switch on card.shape to pick Oval / Squiggle / Diamond.
// ---------------------------------------------------------------------------
export function Card({ card, selected, onClick }: CardProps) {
  void card; void selected; void onClick
  // TODO
  return null
}
