module.exports = {
  siteMetadata: {
    title: `Marius Jagminas`,
    description: `Front-end JavaScript developer`,
    author: `Marius Jagminas`,
    siteUrl: "http://mjagminas.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marius Jagminas Web Developer`,
        short_name: `M Jagminas`,
        start_url: `/`,
        background_color: `#16222a`,
        theme_color: `#16222a`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
