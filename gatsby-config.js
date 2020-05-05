module.exports = {
  siteMetadata: {
    title: `Photonix`,
    titleTemplate: `Photonix · modern photo gallery`,
    description: `Modern imgage gallery built with Gatsby.`,
    author: `Domagoj Kirigin`,
    url: `https://photonix.live`,
    twitterUsername: `@domidevelop`,
    image: `gatsby-icon.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-link-crossorigin`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/photonix_logo.png`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
