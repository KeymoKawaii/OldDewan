module.exports = {
  siteMetadata: {
    title: `Dewan Développement`,
    description: `La formation à porter de main. Digital Micro Learning.
    Des parcours pour développer son potentiel relationnel, prendre du recul sur les situations de tension, 
    augmenter son self management, sa confiance et la maitrise de soi.`,
    author: `@Keymo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/Logo-Dewan-Developpement-RVB.jpg`, // This path is relative to the root of the site.
      },
    },{
      resolve: `gatsby-source-wordpress`,
      options: {
          // Specify the URL of the WordPress source
          baseUrl: `https://dewandev.com`,
          protocol: `https`,
          // Indicates if a site is hosted on WordPress.com
          hostingWPCOM: false,
          // Specify which URL structures to fetch
          includedRoutes: [
            '**/posts',
            '**/tags',
            '**/categories'
          ]
      }
    },{
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-162559347-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true // default
        },
    }
  },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-162559347-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "DewanDev.com",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 400
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
