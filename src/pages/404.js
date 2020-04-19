import React from 'react'
import get from 'lodash/get'
import SEO from '../components/seo'
import Layout from '../components/layout'

class ErrorIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        return (
            <Layout location={this.props.location}>
                <SEO title="404: Not Found" />
                <h1>Question 404</h1>
                <div>
                    Page not found, where are we?
                </div>
            </Layout>
        )
    }
}

export default ErrorIndex
