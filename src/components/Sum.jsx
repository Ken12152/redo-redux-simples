import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Sum(props) {
    const { Min, Max } = props
    const Sum = Min + Max

    return (
        <Card title="Sum" Blue>
            <strong>{ Sum }</strong>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numbers }
}

export default connect(mapStateToProps)(Sum)