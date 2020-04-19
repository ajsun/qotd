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
            allContentfulGroup {
                nodes {
                    shortCode
                    name
                }
            }
        }      
    `)

    result.data.allContentfulQuestion.nodes.forEach((node) => {
        createPage({
            path: `${node.number}`,
            component: path.resolve('./src/templates/question.js'),
            context: {
                number:node.number,
                date: node.date,
                title: node.title
            }
        })
    })

    result.data.allContentfulGroup.nodes.forEach(node => {
        createPage({
            path: `${node.shortCode}`,
            component: path.resolve('./src/templates/groupHome.js'),
            context: {
                name: node.name,
                shortCode: node.shortCode
            }
        })
        result.data.allContentfulQuestion.nodes.forEach((q) => {
            createPage({
                path: `${node.shortCode}/${q.number}`,
                component: path.resolve('./src/templates/question.js'),
                context: {
                    number: q.number,
                    date: q.date,
                    title: q.title,
                    shortCode: node.shortCode
                }
            })
        })
    })
}