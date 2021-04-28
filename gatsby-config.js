require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * TODO: I would remove this config object. Store all your config directly inside of the siteMetadata object below.
 * Then when you need your metadata throughout your site, use a graphql query to grab it directly.
 *  */ 
const config = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'Lorenzo Bernaschina\'s Website', // Navigation and Site Title
  siteTitleAlt: 'The blog of a software engineer and content creator', // Alternative Site title for SEO
  siteTitleShort: 'Lorenzo\'s Blog', // short_name for manifest
  siteUrl: 'https://ittaboba.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteImage: '/images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: 'Personal website where I share my journey, discoveries, and projects',
  author: 'Lorenzo Bernaschina', // Author for schemaORGJSONLD
  organization: 'ittaboba',

  userTwitter: '@ittaboba', // Twitter Username
  ogLanguage: 'en_US',
  googleAnalyticsID: '',

  // Social component
  twitter: 'https://twitter.com/ittaboba/',
  twitterHandle: '@ittaboba',
  github: 'https://github.com/ittaboba',
  linkedin: 'https://www.linkedin.com/in/lorenzo-bernaschina-669a08b9/',
};

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl + config.pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    twitter: config.twitter,
    description: config.siteDescription,
    canonicalUrl: config.siteUrl,
    image: config.siteImage,
    author: {
      name: config.author,
      minibio: ``,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteImage,
    },
    social: {
      twitter: config.twitterHandle,
      github: config.github,
      linkedin: config.linkedin,
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/about`,
        name: 'about',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        plugins: [`gatsby-remark-images`],
        remarkPlugins: [require('remark-unwrap-images')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 750,
              linkImagesToOriginal: false,
              showCaptions: ['title', 'alt']
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Merriweather"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `GOOGLE_ID`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
