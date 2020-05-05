import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const ButtonTop = () => {
  return (
    <div className="text-center">
      <Link to="/" className="btn btn-secondary px-4 my-3">
        <FontAwesomeIcon icon={faArrowUp} className="text-primary" /> ON TOP
      </Link>
    </div>
  )
}

export default ButtonTop
