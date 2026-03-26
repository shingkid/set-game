import type { Fill, Color } from '../../../game/types'

interface ShapeProps {
  color: Color
  fill: Fill
}

// ---------------------------------------------------------------------------
// TODO (Issue #2): Render a diamond SVG shape.
//
// Geometry: a <polygon> with 4 points forming a diamond.
// Example points centred at (40, 0) with width 56, height 28:
//   top:   40,−14
//   right: 68,0
//   bottom: 40,14
//   left:  12,0
// i.e. points="40,-14 68,0 40,14 12,0"
//
// Apply the same fill logic as Oval (solid / empty / striped).
// ---------------------------------------------------------------------------
export function Diamond({ color, fill }: ShapeProps) {
  void color; void fill
  // TODO
  return null
}
