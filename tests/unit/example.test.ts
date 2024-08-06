import { describe, expect, it } from 'vitest'

describe('Math operations', () => {
    it('should add two numbers correctly', () => {
        const a = 2
        const b = 3

        const result = a + b

        expect(result).toBe(5)
    })
})
