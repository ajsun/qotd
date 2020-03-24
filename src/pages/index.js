import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styles from './index.module.css'

class RootIndex extends React.Component {
  state = {
    answer: '',
    name: ''
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { name, answer } = this.state
    if (answer.length) {
      const body = {
        name: name,
        answer: answer,
        question_id: this.props.data.contentfulQuestion.number
      }
      try {
        const response = await fetch('https://us-central1-quickstart-1580081840462.cloudfunctions.net/function-1', {
          method: 'POST',
          body,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } catch(err) {
        return alert("We didn't get that, try again")
      }
      alert("Thanks! We've got your answer")
      location.reload()
    } else {
      alert("You didn't answer!")
    }
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const question = get(this, 'props.data.contentfulQuestion')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div>
          <h4>{question.date}</h4>
          <h1>Question #{question.number}</h1>
          <p>{question.title}</p>
        </div>
        <form onSubmit={this.handleSubmit} className={styles.answerContainer}>

          <input
            type="text"
            name="answer"
            value={this.state.answer}
            onChange={this.handleInputChange}
            placeholder="Your answer here"
            className={styles.answer}
          />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Your name (optional)"
            className={styles.name}
          />
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulQuestion {
      title
      number
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
