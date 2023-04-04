import PropTypes from 'prop-types'
import GifItem from './GifItem'
import useFetchGif from '../hooks/useFetchGif'

const GifGrid = (props) => {
  const { imagesList, isLoading } = useFetchGif(props.category)

  return (
    <>
      <h2>
        <button
          className="btn-delete"
          onClick={() => props.handleRemoveCategory(props.category)}
        >
          ❌
        </button>{' '}
        {props.category}
      </h2>

      {isLoading && <div>Cargando...</div>}

      <div className="masonry">
        {!!imagesList?.length &&
          imagesList.map((image) => <GifItem key={image.id} {...image} />)}
      </div>

      <hr />
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
