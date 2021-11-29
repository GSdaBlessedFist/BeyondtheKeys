/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'BeyondTheKeys(_)',
    description: 'horrors within the code'  
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories`,
        path: `${__dirname}/src/pages/stories/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
}
