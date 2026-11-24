export type LetterStatus = 'correct' | 'present' | 'absent'

export type GameStatus = 'playing' | 'won' | 'lost'

export interface Guess {
  word: string
  statuses: LetterStatus[]
}
