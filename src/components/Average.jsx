import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Media(props) {
    const { Min, Max } = props
    const media = parseInt((Min + Max) / 2)

    return (
        <Card title="Media" Green>
            <strong>{ media }</strong>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numbers }
}

export default connect(mapStateToProps)(Media)