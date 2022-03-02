import { costToString } from './helpers'

test('it returns cost object to string equality', () => {
  const obj = { TEST: 'TEST' }
  const result = costToString(obj)
  expect(result).toBe('TEST:TEST')
})

test('it returns empty string when given undefined to costToString', () => {
  const result = costToString(undefined)
  expect(result).toBe('')
})
