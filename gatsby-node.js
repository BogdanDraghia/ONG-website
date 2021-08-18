const { createFilePath } = require(`gatsby-source-filesystem`)

const path = require(`path`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/BlogPost.js")
  return graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            date
          }
          slug
          body
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(result)
    console.log("sus e result")
    const posts = result.data.allMdx.nodes
    console.log(result.data.allMdx.nodes)
    console.log("sus e allmdx")
    // create page for each mdx file
    posts.forEach(post => {
      createPage({
        path: post.slug,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
        },
      })
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, frontmatter })
    console.log(value)
    console.log("sus e value")
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    })
  }
}
