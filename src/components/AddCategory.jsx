import PropTypes from 'prop-types'
import { useState } from 'react'

const AddCategory = (props) => {
  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    setValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const category = value.trim()
    if (category.length <= 1) return
    props.handleAddCategory(category)
    setValue('')
  }

  return (
    <form onSubmit={onSubmit} name="form-category">
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired,
}

export default AddCategory
