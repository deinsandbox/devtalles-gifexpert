import { useEffect, useState } from 'react'
import { getGifList } from '../helpers/getGifList'

const useFetchGif = (category) => {
  const [imagesList, setImagesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const list = await getGifList(category)
      setImagesList(() => list)
      setIsLoading(false)
    })()
  }, [category])

  return { imagesList, isLoading }
}

export default useFetchGif
