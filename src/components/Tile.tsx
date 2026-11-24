import type { LetterStatus } from '../types'

interface TileProps {
  letter?: string
  status?: LetterStatus
}

function Tile({ letter = '', status }: TileProps) {
  const className = ['tile', status, letter && !status ? 'filled' : '']
    .filter(Boolean)
    .join(' ')

  return <div className={className}>{letter}</div>
}

export default Tile
