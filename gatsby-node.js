
const _ = require('lodash')
const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const webpack = require('webpack');
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWordpressPage.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        createPage({
          path: `/${page.slug}/`,
          component: pageTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
         {
      allWordpressPost{
        edges {
          node {
            id
			title
            slug
			categories{
			  id
			  name
			  slug
			}
			
          }
        }
      }
    }
      `)
    })
  
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressPost } = result.data
		 const blogTemplate = path.resolve(`./src/templates/single-blog.js`);
		  allWordpressPost.edges.forEach((edge,index) => {
				const previous = index === allWordpressPost.edges.length - 1 ? null : allWordpressPost.edges[index + 1]
			    const next = index === 0 ? null : allWordpressPost.edges[index - 1]
				
				  createPage({
				  path: `/blog/${edge.node.slug}/`,
				  component: slash(blogTemplate),
				  context: {
					id: edge.node.id,
					previous : previous,
					next : next,
				  },
				})			  
			 
		  }) 
	 
    })
    .then(() => {
      return graphql(`
         {
      allWordpressCategory{
            edges {
              node {
                id
                name
                slug
              }
            }
          }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressCategory } = result.data
		 const categoryTemplate = path.resolve(`./src/templates/single-category.js`);
		  allWordpressCategory.edges.forEach(edge => {
			createPage({
			  path: `/category/${edge.node.slug}/`,
			  component: slash(categoryTemplate),
			  context: {
				id: edge.node.id,
				cat_name: edge.node.name,
			  },
      })
     
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressPost{
        edges {
          node {
            id
            slug
			title
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const  allWordpressCategory  = result.data.allWordpressPost.edges
		
		paginate({
			createPage,
			items: allWordpressCategory,
			itemsPerPage: 10,
			pathPrefix: '/blog',
			component: path.resolve(`./src/templates/blog.js`),
		  });
	 
	 
    })
	
	
	
	
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
      
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ],
  })
}