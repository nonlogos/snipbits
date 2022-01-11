module.exports = {
	siteMetadata: {
		title: `Wondrous World of Whale Watching`,
		description: `Come and enjoy an experience of a lifetime! Watch whales with us!`,
		author: `@digitalocean`,
		keywords: `whales, marine life, trip, recreation`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		// {
		//   resolve: "gatsby-plugin-google-analytics",
		//   options: {
		//     trackingId: "",
		//   },
		// },
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /images\/.*\.svg/,
					omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape'],
				},
			},
		},
		// {
		// 	resolve: `gatsby-plugin-mdx`,
		// 	options: {
		// 		defaultLayouts: {
		// 			// posts: require.resolve('./src/components/posts-layout.tsx'),
		// 			default: require.resolve('./src/components/posts-layout.tsx'),
		// 		},
		// 		// rehypePlugins: [
		// 		// 	// Generate heading ids for rehype-autolink-headings
		// 		// 	require('rehype-slug'),
		// 		// 	// To pass options, use a 2-element array with the
		// 		// 	// configuration in an object in the second element
		// 		// 	[require('rehype-autolink-headings'), { behavior: 'wrap' }],
		// 		// ],
		// 	},
		// },
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: './src/posts/',
			},
			__key: 'posts',
		},
	],
};
