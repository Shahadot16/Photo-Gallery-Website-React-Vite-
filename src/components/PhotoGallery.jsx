import { useState } from 'react'
import PhotoCard from './PhotoCard.jsx'

function PhotoGallery({ photos, isLoading, error }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAlbum, setSelectedAlbum] = useState('all')

  const albums = [
    ...new Set(photos.map((photo) => photo.albumId))
  ].sort((a, b) => a - b)

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const visiblePhotos = photos.filter((photo) => {
    const matchesAlbum =
      selectedAlbum === 'all' ||
      photo.albumId === Number(selectedAlbum)

    const matchesSearch =
      !normalizedSearch ||
      photo.title.toLowerCase().includes(normalizedSearch) ||
      String(photo.id).includes(normalizedSearch)

    return matchesAlbum && matchesSearch
  })

  return (
    <section id="gallery" className="gallery-section">

      {/* Search and Filter */}

      <div className="gallery-tools">

        <label className="search-control">

          <span className="search-icon" aria-hidden="true">
            🔍
          </span>

          <span className="visually-hidden">
            Search photos
          </span>

          <input
            type="search"
            placeholder="Search by photo title or ID..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </label>


        <label>

          <span className="visually-hidden">
            Select album
          </span>

          <select
            className="album-control"
            value={selectedAlbum}
            onChange={(event) =>
              setSelectedAlbum(event.target.value)
            }
          >

            <option value="all">
              All Albums
            </option>

            {albums.map((album) => (
              <option
                key={album}
                value={album}
              >
                Album {album}
              </option>
            ))}

          </select>

        </label>

      </div>


      {/* Loading */}

      {isLoading && (
        <div className="gallery-message">
          <p>Loading photos...</p>
        </div>
      )}


      {/* Error */}

      {!isLoading && error && (
        <div className="gallery-message">
          <p>{error}</p>
        </div>
      )}


      {/* Photos */}

      {!isLoading && !error && visiblePhotos.length > 0 && (

        <div className="photo-grid">

          {visiblePhotos.map((photo, index) => (

            <PhotoCard
              key={photo.id}
              photo={photo}
              style={{
                animationDelay:
                  `${Math.min(index, 12) * 35}ms`
              }}
            />

          ))}

        </div>

      )}


      {/* No Results */}

      {!isLoading &&
        !error &&
        visiblePhotos.length === 0 && (

          <div className="gallery-message">
            <p>
              No photos found. Try another search.
            </p>
          </div>

        )}

    </section>
  )
}

export default PhotoGallery