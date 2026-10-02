import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PhotoGallery from './components/PhotoGallery.jsx'
import './App.css'

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

function App() {

  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    const fetchPhotos = async () => {

      try {

        setIsLoading(true)
        setError('')

        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('ছবির তথ্য আনা সম্ভব হয়নি।')
        }

        const data = await response.json()

        setPhotos(data.slice(0, 100))

      } catch (err) {

        setError(
          err.message || 'কিছু একটা সমস্যা হয়েছে।'
        )

      } finally {

        setIsLoading(false)

      }
    }

    fetchPhotos()

  }, [])


  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <Header />


      <main id="page-title">

        {/* ================= HERO ================= */}

        <section className="hero-section">

          <div className="hero-content">

            <div className="hero-left">

              <span className="hero-eyebrow">
                STILL GALLERY · 2026
              </span>

              <h1>
                Moments worth
                <br />
                <span>remembering.</span>
              </h1>

              <p>
                A curated collection of everyday images.
                Browse, explore and discover something
                beautiful in every frame.
              </p>

              <a
                href="#gallery-title"
                className="hero-button"
              >
                Explore collection
                <span>↓</span>
              </a>

            </div>


            <div className="hero-right">

              <div className="hero-frame">

                <div className="hero-frame-inner">

                  <span className="hero-frame-number">
                    01
                  </span>

                  <span className="hero-frame-text">
                    EVERYDAY
                    <br />
                    MOMENTS
                  </span>

                </div>

              </div>


              <div className="hero-stat">

                <strong>100</strong>

                <span>
                  photographs
                  <br />
                  in collection
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="about-section"
        >

          <div className="about-content">

            <div className="about-label">
              ABOUT THE GALLERY
            </div>


            <div className="about-text">

              <h2>
                Every image
                <br />
                tells a story.
              </h2>

              <p>
                Still Gallery is a simple collection of
                everyday moments, photographs and visual
                memories. Explore the collection and
                discover something interesting in every
                frame.
              </p>

            </div>


            <div className="about-number">

              <strong>100</strong>

              <span>
                CURATED
                <br />
                PHOTOGRAPHS
              </span>

            </div>

          </div>

        </section>


        {/* ================= GALLERY ================= */}

        <PhotoGallery
          photos={photos}
          isLoading={isLoading}
          error={error}
        />


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-content">

            <div>

              <span className="contact-label">
                GET IN TOUCH
              </span>

              <h2>
                Have something
                <br />
                to share?
              </h2>

            </div>


            <div className="contact-info">

              <p>
                Questions, feedback or just want to say
                hello? Feel free to get in touch.
              </p>

              <a
                href="mailto:hello@stillgallery.com"
                className="contact-email"
              >
                hello@stillgallery.com
                <span>↗</span>
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  )
}

export default App