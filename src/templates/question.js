import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Answers from '../components/answers'

export default ({ data, pageContext }) => {
    const { date, number, title, shortCode, previous, next } = pageContext    
    return (
        <Layout>
            <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                    margin: 0
                }}
            >
                <li>
                    {previous && (
                        <Link style={{ color: 'inherit' }} to={`${shortCode}/${previous.number}`} rel="prev">
                            ← Previous
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link style={{ color: 'inherit' }} to={`${shortCode}/${next.number}`} rel="next">
                            Next →
                        </Link>
                    )}
                </li>
            </ul>
            <div>
                <h4>Published on: {date}</h4>
                <h1>Question #{number}</h1>
                <p>{title}</p>
            </div>
            <Answers questionId={number} shortCode={shortCode} />
        </Layout>
    )
}