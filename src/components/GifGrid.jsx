import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getGifList } from '../helpers/getGifList'

const GifGrid = (props) => {
  const [imagesList, setImagesList] = useState([])

  useEffect(() => {
    getGifList(props.category).then((list) => {
      setImagesList(() => list)
    })
  }, [props.category])

  return (
    <>
      <h2>{props.category}</h2>

      <div className="masonry">
        {!!imagesList?.length &&
          imagesList.map((img) => (
            <div key={img.id} className="masonry-item">
              <img src={img.url} alt={img.title} className="masonry-image" />
            </div>
          ))}
      </div>

      <hr />
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
