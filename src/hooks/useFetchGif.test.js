import { it, expect, describe } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import useFetchGif from './useFetchGif'

describe('useFetchGif', () => {
    it('should show the initial value', () => {
        const category = 'Saint Seiya'
        const { result } = renderHook(
            () => useFetchGif(category)
        )
        expect(result.current).toMatchObject({
            imagesList: [],
            isLoading: true
        })
    })

    it('should return an array with images', async() => {
        const category = 'Saori Kido'
        const { result } = renderHook(
            () => useFetchGif(category)
        )

        await waitFor(
            () => {
                const {current: {imagesList}} = result
                expect(imagesList.length).toBeGreaterThan(0)
            },
            {
                timeout: 2000 // ms, default 1000
            }
        )

        const {imagesList, isLoading} = result.current

        expect(isLoading).toBeFalsy()
        expect(imagesList[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})