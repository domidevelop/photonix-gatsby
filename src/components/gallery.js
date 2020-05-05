import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Lightbox from "./lightbox"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allPhotos: allFile {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const [show, setShow] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(0)
  const photos = data.allPhotos.edges

  const toggleLightbox = () => setShow(!show)

  const openLightbox = (e, index) => {
    e.preventDefault()
    toggleLightbox()
    setSelectedPhoto(index)
  }

  const goBack = () => {
    selectedPhoto === 0
      ? setSelectedPhoto(photos.length - 1)
      : setSelectedPhoto(selectedPhoto - 1)
  }

  const goForward = () => {
    selectedPhoto === photos.length - 1
      ? setSelectedPhoto(0)
      : setSelectedPhoto(selectedPhoto + 1)
  }

  return (
    <section id="gallery">
      <div className="row no-gutters">
        {photos.map((photo, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <a
              href={photo.node.childImageSharp.fluid.src}
              key={`0${i}-${photo.node.id}`}
              onClick={e => openLightbox(e, i)}
            >
              <Img
                fluid={photo.node.childImageSharp.fluid}
                key={`0${i}-${photo.node.id}`}
                alt={`Beautiful photo ${i}`}
                className="img-fluid photos"
                backgroundColor={true}
              />
            </a>
          </div>
        ))}
      </div>

      {show && (
        <Lightbox
          photos={photos}
          selectedPhoto={selectedPhoto}
          show={show}
          toggleLightbox={toggleLightbox}
          goForward={goForward}
          goBack={goBack}
        />
      )}
    </section>
  )
}

export default Gallery
