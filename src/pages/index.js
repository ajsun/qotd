import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const questions = get(this, 'props.data.allContentfulQuestion.edges')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')
    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div>
          <h1>Question #1</h1>
          {questions.map(({ node }) => {
            return (
              <p>{node.title}</p>
            )
          })}
        </div>
      </Layout>
    )
  }
}
      // <Layout location={this.props.location}>
      //   <div style={{ background: '#fff' }}>
      //     <Helmet title={siteTitle} />
      //     <Hero data={author.node} />
      //     <div className="wrapper">
      //       <h2 className="section-headline">Recent articles</h2>
      //       <ul className="article-list">
      //         {posts.map(({ node }) => {
      //           return (
      //             <li key={node.slug}>
      //               <ArticlePreview article={node} />
      //             </li>
      //           )
      //         })}
      //       </ul>
      //     </div>
      //   </div>
      // </Layout>

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulQuestion {
      edges {
        node {
          title
        }
      }
    }
  }
`
