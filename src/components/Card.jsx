import React from 'react'
import './Card.css'

function getColor(props) {
    if(props.Red) {
        return 'red'
    } else if(props.Green) {
        return 'green'
    } else if(props.Blue) {
        return 'blue'
    } else if(props.Purple) {
        return 'purple'
    } else {
        return ''
    }
}

export default props => (
    <div className={`card ${getColor(props)}`}>
        <div className="card-header">
            <span className="card-title">
                { props.title }
            </span>
        </div>
        <div className="card-contents">
            { props.children }
        </div>
    </div>
)
