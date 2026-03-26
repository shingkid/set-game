import type { Card, Count, Color, Shape, Fill } from './types'

const COUNTS: Count[] = [1, 2, 3]
const COLORS: Color[] = ['red', 'green', 'purple']
const SHAPES: Shape[] = ['oval', 'squiggle', 'diamond']
const FILLS: Fill[] = ['solid', 'striped', 'empty']

// ---------------------------------------------------------------------------
// TODO (Issue #1): Create a complete 81-card Set deck.
//
// Every combination of the 4 attributes must appear exactly once.
// Hint: nested loops or chained flatMap over all 4 attribute arrays.
//
// Expected result: an array of 81 Card objects.
// ---------------------------------------------------------------------------
export function createDeck(): Card[] {
  throw new Error('Not implemented')
}

// ---------------------------------------------------------------------------
// TODO (Issue #1): Return a shuffled copy of the given deck.
// Do NOT mutate the original array — make a copy first.
//
// Hint: you've already seen Fisher-Yates in the old deck.js;
// adapt it to work with a copy instead of in-place.
// ---------------------------------------------------------------------------
export function shuffle(deck: Card[]): Card[] {
  throw new Error('Not implemented')
}

// ---------------------------------------------------------------------------
// TODO (Issue #1): Deal n cards from the front of the deck.
// Returns the dealt cards and the remaining deck as separate arrays.
//
// Example:
//   deal([a,b,c,d,e], 3) => { dealt: [a,b,c], remaining: [d,e] }
//
// Hint: Array.prototype.slice is your friend here.
// ---------------------------------------------------------------------------
export function deal(deck: Card[], n: number): { dealt: Card[]; remaining: Card[] } {
  throw new Error('Not implemented')
}
