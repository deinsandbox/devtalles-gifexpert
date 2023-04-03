import { it, expect, describe } from 'vitest'
import { getGifList } from './getGifList'

describe('getGifList()', () => {
    const limit = +import.meta.env.VITE_GIF_API_LIMIT

    it('should return an array with gif', async() => {
        const category = 'Son Goku'
        const result = await getGifList(category)
        expect(result.length).toBeGreaterThan(0)
        expect(result.length).toBeLessThanOrEqual(limit)
        expect(result[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})