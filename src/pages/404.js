import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class ErrorIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        return (
            <Layout location={this.props.location}>
                <Helmet title={siteTitle} />
                <h1>Question 404</h1>
                <div>
                    Page not found, where are we?
                </div>
            </Layout>
        )
    }
}

export default ErrorIndex

export const query = graphql`
query ErrorIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
}
`