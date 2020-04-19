import React from 'react'
import Layout from '../components/layout'
import Answers from '../components/answers'

export default ({ data, pageContext }) => {
    const { date, number, title, shortCode } = pageContext    
    return (
        <Layout>
            <div>
                <h4>Published on: {date}</h4>
                <h1>Question #{number}</h1>
                <p>{title}</p>
            </div>
            <Answers questionId={number} shortCode={shortCode} />
        </Layout>
    )
}