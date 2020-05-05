import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import DomidevelopLink from "./domideveloplink"

const AboutModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} centered={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="text-secondary px-2 m-0">Hi and welcome!</h1>{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="h4 font-weight-normal">
          I am Domi, a front end developer and nature lover! <br /> This is a
          collection of my own photos that I try to update regularly. Thanks for
          visiting! :) <br />
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="lg" block onClick={handleClose}>
          <FontAwesomeIcon icon={faCamera} size="1x" className="text-primary" />{" "}
          PHOTONIX
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AboutModal
