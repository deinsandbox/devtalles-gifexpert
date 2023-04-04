import { useState } from 'react'
import './App.css'
import { AddCategory, GifGrid } from './components'

function App() {
  const initStat = [
    'One Punch Man',
    'Naruto',
    'Inuyasha',
    'Ranma Saotome',
    'Rick and Morty',
  ]
  const [categories, setCategories] = useState(initStat)

  const handleAddCategory = (newCategory) => {
    const categoryExists = categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    )
    if (newCategory && !categoryExists) {
      setCategories((currentCategories) => [newCategory, ...currentCategories])
    }
  }

  const handleRemoveCategory = (category) => {
    const filteredCategories = categories.filter((cat) => cat !== category)
    setCategories(filteredCategories)
  }

  return (
    <div className="App">
      <h1>Gif Expert App</h1>

      <AddCategory handleAddCategory={handleAddCategory} />

      <hr />

      {Boolean(categories?.length) &&
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            handleRemoveCategory={handleRemoveCategory}
          />
        ))}
    </div>
  )
}

export default App
