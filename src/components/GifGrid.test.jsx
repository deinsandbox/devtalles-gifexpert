import { render, screen } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import GifGrid from './GifGrid'
import useFetchGif from '../hooks/useFetchGif'

describe('<GifGrid/>', () => {
  vi.mock('../hooks/useFetchGif')

  it('should show the loading at start', () => {
    useFetchGif.mockReturnValue({
      imagesList: [],
      isLoading: true,
    })
    const category = 'One Punch'

    render(<GifGrid category={category} />)
    screen.getByText(category)
    screen.getByText('Cargando...')
  })

  it('should render the images using the custom hook', () => {
    const gifList = [
      {
        id: '1',
        title: 'Goku',
        url: 'http://localhost/goku.gif',
      },
      {
        id: '2',
        title: 'Vegeta',
        url: 'http://localhost/vegeta.gif',
      },
    ]
    useFetchGif.mockReturnValue({
      imagesList: gifList,
      isLoading: false,
    })
    const category = 'Dragon Ball'

    render(<GifGrid category={category} />)
    screen.getByText(category)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    screen.getByText(gifList[0].title) // Goku
    screen.getByText(gifList[1].title) // Vegeta
  })
})
