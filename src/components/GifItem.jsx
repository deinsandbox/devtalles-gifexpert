import PropTypes from 'prop-types'

const GifItem = (props) => {
  return (
    <div className="masonry-item">
      <figure>
        <img src={props.url} alt={props.title} className="masonry-image" />
        <figcaption>{props.title}</figcaption>
      </figure>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default GifItem
