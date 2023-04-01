import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import GifItem from './GifItem'

describe('<GifItem/>', () => {
  const url = 'https://picsum.photos/seed/picsum/200/300'
  const title = 'picsum'

  it('should match the snapshot', () => {
    render(<GifItem url={url} title={title} />)
    expect(screen).toMatchSnapshot()
  })

  it('should render the image with the url', () => {
    render(<GifItem url={url} title={title} />)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  it('should render the title once', () => {
    render(<GifItem url={url} title={title} />)

    const items = screen.getByText(title)
    expect(items).toBeInTheDocument()
  })
})
