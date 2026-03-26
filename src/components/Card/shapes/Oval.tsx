import type { Fill, Color } from '../../../game/types'

interface ShapeProps {
  color: Color
  fill: Fill
}

// ---------------------------------------------------------------------------
// TODO (Issue #2): Render an oval SVG shape.
//
// Geometry: <ellipse cx="40" cy="0" rx="28" ry="14" />
// (The Card component will translate each shape to the correct y position.)
//
// Fill behaviour:
//   solid  → fill={color}, no stroke needed
//   empty  → fill="none", stroke={color}, strokeWidth="2"
//   striped → fill="url(#stripes-{color})", stroke={color}
//             You'll need to define an SVG <pattern> in <defs>.
//             Horizontal lines spaced ~4px apart work well.
//
// Color map: 'red' → '#e53e3e', 'green' → '#38a169', 'purple' → '#805ad5'
// (or choose your own palette — just be consistent across shapes)
// ---------------------------------------------------------------------------
export function Oval({ color, fill }: ShapeProps) {
  void color; void fill
  // TODO
  return null
}
