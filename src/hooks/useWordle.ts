import { useState } from 'react'
import { MAX_GUESSES, WORD_LENGTH } from '../data/words'
import type { GameStatus, Guess, LetterStatus } from '../types'
import { evaluateGuess } from '../utils/evaluateGuess'
import { getRandomWord } from '../utils/getRandomWord'

const STATUS_PRIORITY: Record<LetterStatus, number> = {
  absent: 0,
  present: 1,
  correct: 2,
}

export function useWordle() {
  const [solution, setSolution] = useState(getRandomWord)
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [status, setStatus] = useState<GameStatus>('playing')
  const [message, setMessage] = useState('')

  const letterStatuses: Record<string, LetterStatus> = {}
  for (const guess of guesses) {
    guess.statuses.forEach((letterStatus, i) => {
      const letter = guess.word[i]
      const previous = letterStatuses[letter]
      if (!previous || STATUS_PRIORITY[letterStatus] > STATUS_PRIORITY[previous]) {
        letterStatuses[letter] = letterStatus
      }
    })
  }

  function submitGuess() {
    if (currentGuess.length !== WORD_LENGTH) {
      setMessage('Not enough letters')
      return
    }

    const newGuesses = [
      ...guesses,
      { word: currentGuess, statuses: evaluateGuess(currentGuess, solution) },
    ]
    setGuesses(newGuesses)
    setCurrentGuess('')

    if (currentGuess === solution) {
      setStatus('won')
      setMessage('You won!')
    } else if (newGuesses.length === MAX_GUESSES) {
      setStatus('lost')
      setMessage(`The word was ${solution.toUpperCase()}`)
    }
  }

  function handleKey(key: string) {
    if (status !== 'playing') return

    if (key === 'Enter') {
      submitGuess()
      return
    }

    setMessage('')

    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
    } else if (/^[a-z]$/i.test(key) && currentGuess.length < WORD_LENGTH) {
      setCurrentGuess((prev) => prev + key.toLowerCase())
    }
  }

  function restart() {
    setSolution(getRandomWord())
    setGuesses([])
    setCurrentGuess('')
    setStatus('playing')
    setMessage('')
  }

  return { guesses, currentGuess, status, message, letterStatuses, handleKey, restart }
}
