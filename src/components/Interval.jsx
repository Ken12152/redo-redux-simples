import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { minChange, maxChange } from '../store/actions/numbers'

function Interval(props) {
    // const Min = 0, Max = 100
    const {Min, Max} = props
    props.changeMin(25)

    return (
        <Card title="Numbers" Red>
            <div className="interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={ Min } 
                        onChange={ e => props.changeMin(+e.target.value) } />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={ Max } />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numbers }
}

function mapDispatchToProps(dispatch) {
    return {
        changeMin(value) {
            const action = minChange(value)
            dispatch(action)
        },
        changeMax(value) {
            const action = maxChange(value)
            dispatch(action)
        }
    }
}

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Interval)
