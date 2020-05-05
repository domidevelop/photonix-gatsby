import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import ButtonTop from "../components/buttonTop"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Gallery />
    <ButtonTop />
  </Layout>
)

export default IndexPage
