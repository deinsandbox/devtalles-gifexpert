import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

describe('<App/>', () => {
  beforeEach(() => {
    user.setup()
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should match the snapshot', () => {
    render(<App />)
    expect(screen).toMatchSnapshot()
  })

  it('should render the title', () => {
    const title = 'Gif Expert App'
    render(<App />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toBeInTheDocument()
    screen.getByText(title)
  })

  it('should add a category', async () => {
    const category = 'Saori Kido'

    render(<App />)
    const input = screen.getByRole('textbox')
    await user.type(input, `${category}{enter}`)

    screen.getByText(category)
  })

  it('should not add a category that already exist', async () => {
    const category = 'Naruto'

    render(<App />)
    const categoriesBefore = screen.getAllByRole('heading', { level: 2 })
    expect(categoriesBefore).toHaveLength(5)

    const input = screen.getByRole('textbox')
    await user.type(input, `${category}{enter}`)

    const categoriesAfter = screen.getAllByRole('heading', { level: 2 })
    expect(categoriesAfter).toHaveLength(5)
  })

  it('should delete a category', async () => {
    render(<App />)

    const category = screen.getAllByRole('heading', { level: 2 })
    expect(category[0]).toBeInTheDocument()

    const deleteCategory = within(category[0]).getByRole('button')
    await user.click(deleteCategory)

    expect(category[0]).not.toBeInTheDocument()
  })
})
