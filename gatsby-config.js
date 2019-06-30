module.exports = {
  siteMetadata: {
    title: 'Star Wars Game',
    description: 'A SWAPI game',
    author: 'Luca Gesmundo <lucagesmundo@yahoo.it>',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',

        // ADD ICON

        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SWAPI',
        fieldName: 'swapi',
        url: 'https://api.graphcms.com/simple/v1/swapi',
      },
    },
  ],
};
