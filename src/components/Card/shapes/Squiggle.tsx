import type { Fill, Color } from '../../../game/types'

interface ShapeProps {
  color: Color
  fill: Fill
}

// The squiggle path — this is provided for you because hand-crafting
// cubic Bezier curves is tedious rather than instructive.
// It fits in a ~56x28 bounding box centred at (40, 0).
export const SQUIGGLE_PATH =
  'M 12,0 C 12,-14 28,-14 40,-7 C 52,0 68,0 68,-7 C 68,0 68,14 56,14 C 44,14 28,14 28,7 C 28,0 12,0 12,0 Z'

// ---------------------------------------------------------------------------
// TODO (Issue #2): Render a squiggle SVG shape.
//
// Use <path d={SQUIGGLE_PATH} /> as the geometry.
// Apply the same fill logic as Oval (solid / empty / striped).
//
// For striped fill you can reuse the same <pattern> definition strategy
// from Oval — consider defining patterns once in App.tsx's SVG defs and
// referencing them by id, rather than repeating in each shape.
// ---------------------------------------------------------------------------
export function Squiggle({ color, fill }: ShapeProps) {
  void color; void fill
  // TODO
  return null
}
