import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import AboutModal from "./aboutModal"

const Logo = () => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)
  return (
    <>
      <div>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon
            icon={faCamera}
            size="3x"
            className="text-primary align-self-center"
          />
          <h1 className="text-secondary px-2 m-0">PHOTONIX</h1>
        </div>
        <h5 className="text-secondary m-0">modern photo gallery</h5>
        <button
          className="btn btn-outline-primary border border-white py-0 px-5 font-weight-bold"
          onClick={toggleShow}
        >
          About
        </button>
      </div>
      <AboutModal show={show} toggleShow={toggleShow} />
    </>
  )
}

export default Logo
