import { WORDS } from '../data/words'

export function getRandomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
