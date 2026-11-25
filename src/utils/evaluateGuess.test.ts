import { describe, expect, it } from 'vitest'
import { evaluateGuess } from './evaluateGuess'

describe('evaluateGuess', () => {
  it('marks all letters correct for exact match', () => {
    expect(evaluateGuess('apple', 'apple')).toEqual([
      'correct', 'correct', 'correct', 'correct', 'correct',
    ])
  })

  it('marks letters in wrong position as present', () => {
    expect(evaluateGuess('heart', 'earth')).toEqual([
      'present', 'present', 'present', 'present', 'present',
    ])
  })

  it('marks missing letters as absent', () => {
    expect(evaluateGuess('ghost', 'piano')).toEqual([
      'absent', 'absent', 'present', 'absent', 'absent',
    ])
  })

  it('does not mark duplicate letters as present more times than in solution', () => {
    expect(evaluateGuess('sheep', 'snake')).toEqual([
      'correct', 'absent', 'present', 'absent', 'absent',
    ])
  })

  it('prefers correct over present for duplicate letters', () => {
    expect(evaluateGuess('eerie', 'apple')).toEqual([
      'absent', 'absent', 'absent', 'absent', 'correct',
    ])
  })
})
