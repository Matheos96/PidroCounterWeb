import React from 'react'
import Button from 'react-bootstrap/Button'

const ResetButton = ({weTeam, theyTeam}) => {

    const resetScores = () => {
        weTeam.current.reset()
        theyTeam.current.reset()
    }

    return (
        <Button 
            className="bigButton" 
            variant="outline-warning" 
            onClick={resetScores}>
                Reset
        </Button>
    )
}

export default ResetButton