import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnailBtn} = props
  const {thumbnailUrl, id} = thumbnailDetails
  const onClickThumbnail = () => {
    onClickThumbnailBtn(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
