function PhotoCard({ photo, style }) {
  const handleImageError = (event) => {
    event.currentTarget.onerror = null

    event.currentTarget.src =
      `https://picsum.photos/seed/${photo.id}/720/540`
  }

  return (
    <article
      className="photo-card"
      style={style}
    >
      <div className="photo-image-wrap">

        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          onError={handleImageError}
        />

        <div className="image-overlay">
          <span>VIEW PHOTO</span>
        </div>

        <span className="photo-album-tag">
          Album {photo.albumId}
        </span>

        <span className="photo-number">
          #{String(photo.id).padStart(3, '0')}
        </span>

      </div>

      <div className="photo-details">

        <div className="photo-meta">

          <span className="photo-id">
            PHOTO {String(photo.id).padStart(3, '0')}
          </span>

          <span className="photo-album">
            Album {photo.albumId}
          </span>

        </div>

        <h3
          className="photo-title"
          title={photo.title}
        >
          {photo.title}
        </h3>

      </div>
    </article>
  )
}

export default PhotoCard