/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioPage = path.resolve(`src/pages/index.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
		`{
      allContentfulPage {
        edges {
          node {
            buttonlink
            subtitle
            title
            buttontext
            linkedin
            facebook
            instagram
            content {
              raw
            }
            images {
              file {
                url
              }
              title
              id
            }
            projects {
              carousel {
                file {
                  url
                }
              }
              content {
                raw
              }
              id
              title
              front {
                file {
                  url
                }
              }
            }
            slug
          }
        }
      }
    }
		`
	).then(result => {
		if (result.errors) {
			throw result.errors
		}

		const posts = result.data.allContentfulPage.edges

		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index - 1].node
			const next = index === 0 ? null : posts[index + 1].node
	
			createPage({
				path: post.node.slug,
				component: portfolioPage,
				context: {
					slug: post.node.slug,
					previous,
					next,
				},
			})
		})
	})
}
