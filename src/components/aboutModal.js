import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Modal from "react-bootstrap/Modal"
import DomidevelopLink from "./domideveloplink"

const AboutModal = ({ show, toggleShow }) => {
  return (
    <Modal show={show} centered={true} onHide={toggleShow}>
      <Modal.Header>
        <Modal.Title>
          <h1 className="text-secondary px-2 m-0">Hi and welcome!</h1>
        </Modal.Title>
        <button className="btn align-self-center" onClick={toggleShow}>
          <FontAwesomeIcon icon={faTimes} className="text-muted" />
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="about-modal">
          <p className="h4 font-weight-normal">
            I am Domi, a front end developer and nature lover! <br /> This is a
            collection of my own photos that I try to update regularly. Thanks
            for visiting! :) <br />
          </p>
          <p className="lead font-weight-normal">
            Connect:{" "}
            <a
              href="mailto:domidevelop@outlook.com"
              class="font-weight-bold email"
            >
              domidevelop@outlook.com
            </a>
            <br /> Portfolio:
            <DomidevelopLink />
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-secondary btn-block"
          onClick={toggleShow}
        >
          <FontAwesomeIcon icon={faCamera} size="1x" className="text-primary" />{" "}
          PHOTONIX
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AboutModal
