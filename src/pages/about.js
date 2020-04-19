import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/seo'
import Layout from '../components/layout'

class AboutIndex extends React.Component {
    render() {
        return (
          <Layout location={this.props.location}>
            <SEO title="About" />
            <div>
              <p>
                Thoughtful and interesting questions updated every week.
              </p>
              <h4>How it works</h4>
              <ul>
              <li>Every Monday and Friday morning, we'll send your group a unique question</li>
              <li>Submit your answers on the website before 3pm ET</li>
              <li>Shortly after the question closes, we'll send the answers back for you to enjoy!</li>
              </ul>
            </div>
          </Layout>
        )
    }
}

export default AboutIndex