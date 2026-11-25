import type { LetterStatus } from '../types'

const ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
]

interface KeyboardProps {
  letterStatuses: Record<string, LetterStatus>
  onKey: (key: string) => void
}

function Keyboard({ letterStatuses, onKey }: KeyboardProps) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              type="button"
              className={`key ${key.length > 1 ? 'wide' : ''} ${letterStatuses[key] ?? ''}`}
              onClick={(event) => {
                event.currentTarget.blur()
                onKey(key)
              }}
              aria-label={key}
            >
              {key === 'Backspace' ? '⌫' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
