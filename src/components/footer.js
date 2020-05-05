import React from "react"
import Logo from "./logo"
import GatsbyLink from "./gatsbylink"
import DomidevelopLink from "./domideveloplink"

const Footer = () => {
  return (
    <footer className="text-center bg-light py-3 mt-3">
      <Logo />
      <p className="my-3">
        Built with
        <GatsbyLink /> <br className="d-sm-none" />
        &copy; 2019-{new Date().getFullYear()}
        <DomidevelopLink />
      </p>
    </footer>
  )
}

export default Footer
