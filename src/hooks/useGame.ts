// ---------------------------------------------------------------------------
// Optional convenience hook.
//
// You may not need this until the store gets large and you find yourself
// writing the same useGameStore(state => state.x) selector in many places.
//
// Consider adding derived values here, e.g.:
//   const hasNoSets = findAllSets(board).length === 0
//   const canDealMore = deck.length >= 3
//
// For now, leave it empty and come back when the need arises.
// ---------------------------------------------------------------------------
export function useGame() {
  // TODO (optional)
}
