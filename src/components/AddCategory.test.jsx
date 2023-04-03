import { render, screen } from '@testing-library/react'
import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import user from '@testing-library/user-event'
import AddCategory from './AddCategory'

describe('<AddCategory/>', () => {
  const mockHandleAddCategory = vi.fn()

  beforeEach(() => {
    user.setup()
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should change the value on the input', async () => {
    const category = 'Saitama'
    render(<AddCategory handleAddCategory={mockHandleAddCategory} />)
    const input = screen.getByRole('textbox')
    await user.type(input, category)

    expect(input).toHaveValue(category)
  })

  it('should call the callback if the input has a value', async () => {
    const category = 'Monkey D. Luffy'
    render(<AddCategory handleAddCategory={mockHandleAddCategory} />)
    const input = screen.getByRole('textbox')
    await user.type(input, `${category}{enter}`)

    expect(mockHandleAddCategory).toHaveBeenCalledTimes(1)
    expect(mockHandleAddCategory).toHaveBeenCalledWith(category)
    expect(input).toHaveValue('')
  })

  it('should not call the callback if the input is empty', async () => {
    render(<AddCategory handleAddCategory={mockHandleAddCategory} />)
    const input = screen.getByRole('textbox')
    await user.type(input, '{enter}')

    expect(mockHandleAddCategory).not.toHaveBeenCalled()
  })
})
