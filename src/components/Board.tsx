import { MAX_GUESSES } from '../data/words'
import type { Guess } from '../types'
import Row from './Row'

interface BoardProps {
  guesses: Guess[]
  currentGuess: string
}

function Board({ guesses, currentGuess }: BoardProps) {
  const emptyRowsCount = Math.max(MAX_GUESSES - guesses.length - 1, 0)
  const showCurrentRow = guesses.length < MAX_GUESSES

  return (
    <div className="board">
      {guesses.map((guess, i) => (
        <Row key={i} word={guess.word} statuses={guess.statuses} />
      ))}
      {showCurrentRow && <Row word={currentGuess} />}
      {Array.from({ length: emptyRowsCount }, (_, i) => (
        <Row key={`empty-${i}`} />
      ))}
    </div>
  )
}

export default Board
