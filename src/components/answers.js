import React from 'react'
import styles from './navigation.module.css'
import api from '../utils/fetch'

class Answer extends React.Component {
    state = {
        answers: []
    }
    async componentDidMount() {
        console.log(this.props)
        const response = await api.read({
            question_id: this.props.questionId,
            short_code: this.props.shortCode
        })

        const answers = await response.json()

        this.setState({
            answers: answers.answers
        })
    }

    render() {
        console.log(this.state.answers)
        return (
            <table style={{ backgroundColor: '#F0F0F0'}}>
                <tbody>
                    {this.state.answers.map((a, i) => {
                        return (
                            <tr key={i}>
                                <td style={{
                                    border: '2px solid white',
                                    borderCollapse: 'collapse',
                                    padding: '0.25rem 0.5rem'
                                }}>
                                    {a.answer}
                                </td>
                                <td style={{
                                    border: '2px solid white',
                                    borderCollapse: 'collapse',
                                    padding: '0.25rem 0.5rem'
                                }}>
                                    {a.name}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

}

export default Answer
