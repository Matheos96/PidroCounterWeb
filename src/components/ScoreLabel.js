import React from 'react'

const ScoreLabel = ({ score }) => {

    const style = {
        display: 'flex',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        justifyContent: 'center',
        margin: 0,
        padding: 0
        
    }

    return (
        <div style={style}>
            {score}
        </div>
    )
}

export default ScoreLabel