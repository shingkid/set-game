import type { Card } from './types'

// ---------------------------------------------------------------------------
// TODO (Issue #1): The core rule of Set.
//
// Three cards form a valid Set if, for EACH of the 4 attributes,
// the values across the three cards are either ALL THE SAME or ALL DIFFERENT.
// Any other combination (two same, one different) is not a Set.
//
// Valid examples:
//   count  1,2,3 → all different ✓
//   color  red,red,red → all same ✓
//   shape  oval,oval,oval → all same ✓
//   fill   solid,striped,empty → all different ✓
//   → valid Set
//
// Invalid example:
//   count  1,1,2 → two same, one different ✗
//   → not a Set
//
// Hint: for a single attribute, collect the 3 values into a Set (JS built-in).
// A valid attribute has Set.size === 1 (all same) or Set.size === 3 (all different).
// Size === 2 means invalid.
// ---------------------------------------------------------------------------
export function isSet(a: Card, b: Card, c: Card): boolean {
  throw new Error('Not implemented')
}

// ---------------------------------------------------------------------------
// TODO (Issue #1 / Issue #6): Find every valid Set on the board.
// Returns an array of index triples, e.g. [[0,1,2], [3,7,11]].
//
// Used by:
//   - The hint system (Issue #6): highlight one valid Set
//   - Board management (Issue #4): detect when no Sets remain and
//     more cards must be dealt
//
// Hint: three nested loops over board indices, checking isSet for each triple.
// ---------------------------------------------------------------------------
export function findAllSets(board: Card[]): [number, number, number][] {
  throw new Error('Not implemented')
}
