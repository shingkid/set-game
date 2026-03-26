import { useEffect } from 'react'
import { Board } from './components/Board/Board'
import { HUD } from './components/HUD/HUD'
import { useGameStore } from './game/store'

export default function App() {
  const startGame = useGameStore((state) => state.startGame)

  useEffect(() => {
    startGame()
  }, [startGame])

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-4 gap-4">
      <h1 className="text-4xl font-bold text-white tracking-widest">SET</h1>
      <HUD />
      <Board />
    </div>
  )
}
