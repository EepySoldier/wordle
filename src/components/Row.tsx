import { WORD_LENGTH } from '../data/words'
import type { LetterStatus } from '../types'
import Tile from './Tile'

interface RowProps {
  word?: string
  statuses?: LetterStatus[]
}

function Row({ word = '', statuses }: RowProps) {
  return (
    <div className="row">
      {Array.from({ length: WORD_LENGTH }, (_, i) => (
        <Tile key={i} letter={word[i]} status={statuses?.[i]} />
      ))}
    </div>
  )
}

export default Row
