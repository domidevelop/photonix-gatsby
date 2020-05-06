import React from "react"
import Img from "gatsby-image"
import Modal from "react-bootstrap/Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const Lightbox = ({
  photos,
  selectedPhoto,
  show,
  toggleLightbox,
  goForward,
  goBack,
}) => {
  return (
    <Modal show={show} size={"lg"} centered={true} onHide={toggleLightbox}>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center p-2">
          <p className="lightbox-header">
            {selectedPhoto + 1} / {photos.length}
          </p>
          <button className="btn lightbox-header" onClick={toggleLightbox}>
            <FontAwesomeIcon icon={faTimes} className="text-muted" />
          </button>
        </div>
        <div className="slideshow">
          <Img
            fluid={photos[selectedPhoto].node.childImageSharp.fluid}
            key={`0${selectedPhoto}-${photos[selectedPhoto].node.id}`}
            alt={`Beautiful photo number ${selectedPhoto}`}
            className="img-fluid"
            backgroundColor={true}
          />
          <button
            className="btn btn-light lightbox-btn left-btn"
            onClick={goBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="btn btn-light lightbox-btn right-btn"
            onClick={goForward}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        {/* <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-light" onClick={goBack}>
            <FontAwesomeIcon icon={faChevronLeft} /> Previous
          </button>
          <button className="btn btn-light" onClick={goForward}>
            Next <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div> */}
      </Modal.Body>
    </Modal>
  )
}

export default Lightbox
