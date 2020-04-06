const path = require('path')

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allContentfulQuestion {
                nodes {
                    date(formatString: "MMMM DD, YYYY")
                    number
                    title
                }
            }
        }      
    `)

    result.data.allContentfulQuestion.nodes.forEach((node) => {
        console.log(node)
        createPage({
            path: `${node.number}`,
            component: path.resolve('./src/templates/question.js'),
            context: {
                number:node.number
            }
        })
    })
}