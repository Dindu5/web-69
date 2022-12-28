/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
            @import './src/styles/abstracts/_variables.scss';
            @import './src/styles/abstracts/_mixins.scss';
            @import './src/styles/base/_typography.scss';
          `,
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
