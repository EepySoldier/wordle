import { useEffect } from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { useWordle } from './hooks/useWordle'

function App() {
  const { guesses, currentGuess, status, message, letterStatuses, handleKey, restart } =
    useWordle()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return
      handleKey(event.key)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handleKey])

  return (
    <main className="app">
      <h1>Wordle</h1>
      <p className="message" role="status">
        {message}
      </p>
      <Board guesses={guesses} currentGuess={currentGuess} />
      {status !== 'playing' && (
        <button type="button" className="restart" onClick={restart}>
          Play again
        </button>
      )}
      <Keyboard letterStatuses={letterStatuses} onKey={handleKey} />
    </main>
  )
}

export default App
