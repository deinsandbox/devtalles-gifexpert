import { render, screen } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import user from '@testing-library/user-event'
import AddCategory from './AddCategory'

describe('<AddCategory/>', () => {
  it('should change the value on the input', async () => {
    const category = 'Saitama'
    user.setup()
    const mockHandleAddCategory = vi.fn()

    render(<AddCategory handleAddCategory={mockHandleAddCategory} />)
    const input = screen.getByRole('textbox')
    await user.type(input, category)

    expect(input).toHaveValue(category)
  })

  it('should call the callback if the input has a value', async () => {
    const category = 'Monkey D. Luffy'
    user.setup()
    const mockHandleAddCategory = vi.fn()

    render(<AddCategory handleAddCategory={mockHandleAddCategory} />)
    const input = screen.getByRole('textbox')
    await user.type(input, `${category}{enter}`)

    expect(mockHandleAddCategory).toHaveBeenCalledTimes(1)
    expect(mockHandleAddCategory).toHaveBeenCalledWith(category)
    expect(input).toHaveValue('')
  })

  it('should not call the callback if the input is empty', async () => {
    const mockHandleAddCategory = vi.fn()

    render(<AddCategory handleAddCategory={mockHandleAddCategory} />)
    const input = screen.getByRole('textbox')
    await user.type(input, '{enter}')

    expect(mockHandleAddCategory).not.toHaveBeenCalled()
  })
})
