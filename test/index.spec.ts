import { describe, expect, it } from '@jest/globals'
import helloWord from '../src'

describe('test', () => {
  it('should work', () => {
    expect(helloWord()).toBe('Hello World')
  })
})
