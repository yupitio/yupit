module.exports = {
  siteMetadata: {
	title: 'YupIT - For Foodies',
	siteUrl: 'https://www.yupit.io/',
	description: `we are driven with the sole intention of sharing awesome experiences via great food & drinks with the world.`,
    author: `@yupit`,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
	'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://angry-wescoff-3d0b1d.netlify.com',
		},
	},
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'admin.yupit.io',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
	{
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: "#ff6034",
      // Disable the loading spinner.
      showSpinner: false,
    },
  },
  {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'yupit'
      }
    },
	{
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
    }
  },
	{
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-KQHMCKW",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
