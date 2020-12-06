import react from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Random(props) {
    const { Min, Max } = props
    const Random = parseInt(Math.random() * (Max - Min)) + Min

    return (
        <Card title="Random" Purple>
            <strong>{ Random }</strong>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numbers }
}

export default connect(mapStateToProps)(Random)