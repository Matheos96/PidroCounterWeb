import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import GameContext from './GameContext'

const RevertButton = () => {

    const {revertMode, setRevertMode} = useContext(GameContext)

    const toggle = () => setRevertMode(!revertMode)

    return (
        <Button 
            className="bigButton" 
            onClick={toggle} 
            variant={revertMode ? 'danger' : 'info'}>
                <span>{revertMode ? 'Håla' : 'Normal'}</span>
        </Button>
    )
}

export default RevertButton