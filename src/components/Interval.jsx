import './Interval.css'

import React from 'react'
import Card from './Card'

export default props => {
    const Min = 0, Max = 100

    return (
        <Card title="Numbers" Red>
            <div className="interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={ Min } />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={ Max } />
                </span>
            </div>
        </Card>
    )
}
