import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allPhotos: allFile {
        edges {
          node {
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
  const photos = data.allPhotos.edges

  return (
    <section id="gallery">
      <div className="row no-gutters">
        {photos.map((photo, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <Img
              fluid={photo.node.childImageSharp.fluid}
              key={i}
              alt={`Beautiful photo ${i}`}
              className="img-fluid photos"
              backgroundColor={true}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
