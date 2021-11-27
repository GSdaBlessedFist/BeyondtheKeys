/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'the BeyondTheKeys() Blog',
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
        name: `blog`,
        path: `${__dirname}/src/blog/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `space mono\: 400,400i,700b,700i`,
          `titillium web\: 200,400i,700b,700bi`
        ],
        display: "swap"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
}
