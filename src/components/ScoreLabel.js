import React from 'react'

const ScoreLabel = ({ score }) => {

    const style = {
        display: 'flex',
        width: '100%',
        fontSize: '50px',
        fontWeight: 'bold',
        justifyContent: 'center'
        
    }

    return (
        <div style={style}>
            {score}
        </div>
    )
}

export default ScoreLabel