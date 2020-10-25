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
            variant="warning" 
            onClick={resetScores}>
                <span>Återställ</span>
        </Button>
    )
}

export default ResetButton