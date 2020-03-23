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
                    Thoughtful and interesting questions updated Monday, Wednesday and Friday
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