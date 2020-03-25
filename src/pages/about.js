import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class AboutIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        return (
          <Layout location={this.props.location}>
            <Helmet title={siteTitle} />
            <div>
              <p>
                Thoughtful and interesting questions updated Monday, Wednesday and Friday
              </p>
              <h4>How it works</h4>
              <ul>
              <li>Every Monday, Wednesday, and Friday morning, we'll send your group a unique question</li>
              <li>Submit your answers on the website before 3pm ET</li>
              <li>Shortly after the question closes, we'll send the answers back for you to enjoy!</li>
              </ul>
            </div>
          </Layout>
        )
    }
}

export default AboutIndex

export const query = graphql`
query AboutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
}
`