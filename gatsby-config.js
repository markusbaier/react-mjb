module.exports = {
  siteMetadata: {
    title: 'MJB Playground',
    description: 'Complete course about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and ressource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course,arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'l38kxxlik5ek',
        accessToken: '8e413a3fb16b47b60a6adcbf934702be24cdcda46212e57bfa17856632f4b289'
      }
    }

  ],
}
