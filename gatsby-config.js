/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config()

const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  developMiddleware: app => {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:5000",
      })
    )
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:5000",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
