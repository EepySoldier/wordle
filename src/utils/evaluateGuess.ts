import type { LetterStatus } from '../types'

export function evaluateGuess(guess: string, solution: string): LetterStatus[] {
  const statuses: LetterStatus[] = Array(guess.length).fill('absent')
  const remaining: Record<string, number> = {}

  for (let i = 0; i < solution.length; i++) {
    if (guess[i] === solution[i]) {
      statuses[i] = 'correct'
    } else {
      remaining[solution[i]] = (remaining[solution[i]] ?? 0) + 1
    }
  }

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i]
    if (statuses[i] !== 'correct' && remaining[letter] > 0) {
      statuses[i] = 'present'
      remaining[letter]--
    }
  }

  return statuses
}
