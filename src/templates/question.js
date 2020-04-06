import React from 'react'
import Layout from '../components/layout'

export default ({ data }) => {
    const question = data.contentfulQuestion
    
    return (
        <Layout>
            <div>
                <h4>Published on: {question.date}</h4>
                <h1>Question #{question.number}</h1>
                <p>{question.title}</p>
            </div>
        </Layout>
    )
}


export const query = graphql`
    query($number: Int) {
        contentfulQuestion(number: { eq: $number }) {
            title
            number
            date(formatString: "MMMM DD, YYYY")
        }
    }
`